import User from '../models/User.js'
import Product from '../models/Product.js'



/* READ */
export const getProducts = async (req, res, next) => {
  const newQ = req.query.new
  const searchQ = req.query.search
  const popularQ = req.query.popular
  const soldQ = req.query.sold
  const sizeTypeQ = req.query.sizeType
  const typeQ = req.query.type
  const genderQ = req.query.gender
  const sizesQ = req.query.sizes

  try {
    let productsQuery = {}
    if(searchQ) {
      productsQuery.title = { $regex: searchQ, $options: 'i' };
    }
    if(typeQ) {
      productsQuery.type = typeQ;
    }
    if(genderQ) {
      productsQuery.gender = [genderQ, 'unisex'];
    }
    if(sizesQ) {
      productsQuery.sizes = { $in: sizesQ };
    }
    if (sizeTypeQ && ['men', 'women', 'kids'].includes(sizeTypeQ)) {
      productsQuery.sizeType = sizeTypeQ;
    }

    let sortQuery = {}
    if (newQ) {
      sortQuery.createdAt = -1;
    } else if (popularQ) {
      sortQuery.views = -1;
    } else if (soldQ) {
      sortQuery.sold = -1;
    }

    const products = await Product.find(productsQuery).sort(sortQuery);

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