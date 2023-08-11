import User from "../models/User.js";



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