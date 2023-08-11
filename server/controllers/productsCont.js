import User from '../models/User.js'
import Product from '../models/Product.js'



/* READ */
export const getProducts = async (req, res, next) => {
  const newQ = req.query.new
  const searchQ = req.query.search
  const popularQ = req.query.popular

  try {
    let products;

    if(searchQ && newQ){
      products = await Product.find({ title: { $regex: searchQ, $options: 'i' } }).sort({ createdAt: -1 });
    } else if(searchQ && popularQ){
      products = await Product.find({ title: { $regex: searchQ, $options: 'i' } }).sort({ views: -1 });
    } else if (searchQ) {
      products = await Product.find({ title: { $regex: searchQ, $options: 'i' } }).sort({ createdAt: 1 });
    } else if (newQ) {
      products = await Product.find().sort({ createdAt: -1 });
    }else if (popularQ) {
      products = await Product.find().sort({ views: -1 });
    }else{
      products = await Product.find()
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}


export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}




/* CREATE */ 
export const addProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}



/* UPDATE */
export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}



/* DELETE */ 
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}




export const test = async (req, res, next) => {
  res.send("hi")
}