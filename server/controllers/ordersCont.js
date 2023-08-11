import Order from "../models/Order.js"
import User from "../models/User.js"
import Product from "../models/Product.js"


/* READ */
export const getOrders = async (req, res, next) => {
  const newQ = req.query.new
  const amountQ = req.query.amount
  const searchAddressQ = req.params.search
  const searchIdQ = req.params.searchId
  console.log(calledMonth)
  try {
    let orders;

    if(newQ) {
      if (newQ === 'true') {
        orders = await Order.find().sort({ createdAt: -1 })
      }else if (newQ === 'false') {
        orders = await Order.find().sort({ createdAt: 1 })
      }else {
        res.status(400).json({message: `${newQ} is an unvalid new query value. Valid ones (true - false)`})
      }
    } else if (amountQ) {
      if (amountQ === 'asc') {
        orders = await Order.find().sort({ amount: 1 })
      } else if (amountQ === 'desc') {
        orders = await Order.find().sort({ amount: -1 })
      }else {
        res.status(400).json({message: `${newQ} is an unvalid new query value. Valid ones (asc - desc)`})
      }
    } else {
      orders = await Order.find()
    }

    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}


export const getOrdersMonth = async (req, res, next) => {
  const newQ = req.query.new
  const amountQ = req.query.amount
  

  

  // date query
  const lastQ = req.query.last
  const currentMonth = new Date();
  const calledMonth = new Date();
  calledMonth.setMonth(currentMonth.getMonth() - parseInt(lastQ));
  calledMonth.setDate(1)
  currentMonth.setDate(1)
  

  console.log(calledMonth)
  try {
    let orders;

    if(newQ) {
      if (newQ === 'true') {
        orders = await Order.find().sort({ createdAt: -1 })
      }else if (newQ === 'false') {
        orders = await Order.find().sort({ createdAt: 1 })
      }else {
        res.status(400).json({message: `${newQ} is an unvalid new query value. Valid ones (true - false)`})
      }
    } else if (amountQ) {
      if (amountQ === 'asc') {
        orders = await Order.find().sort({ amount: 1 })
      } else if (amountQ === 'desc') {
        orders = await Order.find().sort({ amount: -1 })
      }else {
        res.status(400).json({message: `${newQ} is an unvalid new query value. Valid ones (asc - desc)`})
      }
    } else {
      orders = await Order.find()
    }

    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json({err: error.message})
  }
}






/* CREATE */ 
export const placeOrder = async(req, res) => {
  const newOrder = new Order(req.body);

  try {
    // add new order to the DB
    const savedOrder = await newOrder.save();

    // add the new order to the user's orders
    await User.findByIdAndUpdate(
      req.body.userId,
      {$push: { orders: savedOrder }}
    )

    // add the order id in each product sold ordersIn key
    // increament the sold key in each product by the quantity of the sold ones of it
    savedOrder.products.forEach( async (orderProduct) => {
      await Product.findByIdAndUpdate(
        orderProduct.productId,
        {
          $inc: { sold: orderProduct.quantity },
          $addToSet: { ordersIn: savedOrder._id }
        }
      )
    })

    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
}
