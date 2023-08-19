import User from "../models/User.js";
import Product from "../models/Product.js";
import _ from 'lodash'



/* READ */ 
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({error: error.message, hint: 'Maybe the user is not found'});
  }
}


export const getUsers = async (req, res, next) => {
  const searchQ = req.query.search
  const newQ = req.query.new
  const ordersQ = req.query.orders

  try {
    let users;

    if(searchQ && newQ) {
      users = await User.find({
        $or: [
          { email: { $regex: searchQ, $options: 'i' } },
          { firstName: { $regex: searchQ, $options: 'i' } },
          { lastName: { $regex: searchQ, $options: 'i' } }
        ]
      }).sort({ createdAt: -1 });
    }else if (searchQ && ordersQ) {
      users = await User.aggregate([
        {
          $match: {
            $or: [
              { email: { $regex: searchQ, $options: 'i' } },
              { firstName: { $regex: searchQ, $options: 'i' } },
              { lastName: { $regex: searchQ, $options: 'i' } }
            ]
          }
        },
        { $addFields: { ordersLength: { $size: '$orders' } } },
        { $sort: { ordersLength: -1 } }
      ]);
    } else if (searchQ) {
      users = await User.find({
        $or: [
          { email: { $regex: searchQ, $options: 'i' } },
          { firstName: { $regex: searchQ, $options: 'i' } },
          { lastName: { $regex: searchQ, $options: 'i' } }
        ]
      }).sort({ createdAt: 1 });
    } else if (ordersQ) {
      users = await User.aggregate([
        { $addFields: { ordersLength: { $size: '$orders' } } },
        { $sort: { ordersLength: -1 } }
      ]);
      console.log('ordersQ')
    } else if (newQ) {
      users = await User.find().sort({ createdAt: -1 });
    } else {
      users = await User.find()
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export const getCart = async(req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user.cart)
  } catch (error) {
    res.status(500).json({message: `custom err while getting cart: ${error.message}`, error, })
  }
}


export const getLikes = async(req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    const products = await Promise.all(
      user.favs.map(async (productId) => {
        return await Product.findById(productId)
      })
    )
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message: `custom err while getting liked products: ${error.message}`, error, })
  }
}


/* CREATE */ 
export const register = (req, res, next) => {
  
}



/* DELETE */ 
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}



/* UPDATE */
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
}


export const cart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)

    let productExist = false;

    for (let i = 0; i < user.cart.length; i++) {
      const { _id, ...product } = user.cart[i]._doc
      if (_.isEqual(product, req.body)) {
        user.cart.splice(i, 1)
        productExist = true
        break;
      }
    }

    if (!productExist) {
      user.cart.push(req.body)
    }

    const updatedUser = await user.save()
    res.status(200).json(updatedUser.cart)
  } catch (error) {
    res.status(500).json({ message: error.message, error, })
  }
} 


export const likeProduct = async (req, res) => {
  const userId = req.user.id
  const productId = req.params.productId
  try {
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    if (user.favs.includes(productId)) {
      user.favs.pull(productId);
    } else {
      user.favs.addToSet(productId);
    }

    const updatedUser = await user.save();
    res.status(200).json(updatedUser.favs)

  } catch (error) {
    res.status(500).json({ message: error.message, error,})
  }
}