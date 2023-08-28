import './update.css'
import  { useState } from 'react';
import ImageSlider from '../../components/imageSlider/ImgSlider';

let myDummyData = [
  {
    id: 0,
    title: "Cool T-Shirt",
    desc: "A stylish and comfortable t-shirt for everyday wear.",
    gender: "Men",
    type: "t-shirt",
    sizes: ["S", "M", "L", "XL"],
    sizeType: "men",
    colors: ["Red", "Blue", "Black"],
    imgs: [
      {
        color: "Red",
        imgs: ["red-front.jpg", "red-back.jpg"],
      },
      {
        color: "Blue",
        imgs: ["blue-front.jpg", "blue-back.jpg"],
      },
      {
        color: "Black",
        imgs: ["black-front.jpg", "black-back.jpg"],
      },
    ],
    price: 29.99,
    views: 120,
    sold: 50,
    ordersIn: ["order123", "order456"],
    inStock: true,
  },
];

const Update = () => {





  

  return (
    <>
          <div className="login">
            <div className="container" style={{ height: "95vh" }}>
              <div className="text2">
                <h1>Update product!</h1>
                <div className="inputs">
                <p style={{ margin: '0px 0px 20px 0px'}}>images</p>

                <ImageSlider />

                  <p style={{ margin: '20px 0 0 0'}}>product id</p>
                  <input
                    className="main-input"
                    name="Id"
                    type="text"
                    placeholder="Id"
                    defaultValue={myDummyData[0].id}
                    required
                  />
                  <p style={{ margin: '0px'}}>product Title</p>
                  <input
                    className="main-input"
                    name="Title"
                    type="text"
                    placeholder="Title"
                    defaultValue={myDummyData[0].title}
                    required
                  />
                  <p style={{ margin: '0px'}}>product description</p>
                  <input
                    className="main-input"
                    name="Desc"
                    type="text"
                    placeholder="description"
                    defaultValue={myDummyData[0].desc}
                    required
                  />
                  <p style={{ margin: '0px'}}>product gender</p>
                  <input
                    className="main-input"
                    name="gender"
                    type="text"
                    placeholder="gender"
                    defaultValue={myDummyData[0].gender}
                    required
                  />
                  <p style={{ margin: '0px'}}>product sizes</p>
                  <input
                    className="main-input"
                    name="sizes"
                    type="text"
                    placeholder="sizes"
                    defaultValue={myDummyData[0].sizes}
                    required
                  />
                  <p style={{ margin: '0px'}}>product colors</p>
                  <input
                    className="main-input"
                    name="colors"
                    type="text"
                    placeholder="colors"
                    defaultValue={myDummyData[0].colors}
                    required
                  />

                  <p style={{ margin: '0px'}}>product price</p>
                  <input
                    className="main-input"
                    name="price"
                    type="price"
                    placeholder="imgs"
                    defaultValue={myDummyData[0].price}
                    required
                  />
                  <p style={{ margin: '0px'}}>product views</p>
                  <input
                    className="main-input"
                    name="views"
                    type="text"
                    placeholder="views"
                    defaultValue={myDummyData[0].views}
                    required
                  />
                  <p style={{ margin: '0px'}}>amount sold</p>
                  <input
                    className="main-input"
                    name="sold"
                    type="text"
                    placeholder="sold"
                    defaultValue={myDummyData[0].sold}
                    required
                  />
                  <p style={{ margin: '0px'}}>orders in</p>
                  <input
                    className="main-input"
                    name="orders"
                    type="text"
                    placeholder="orders"
                    defaultValue={myDummyData[0].ordersIn}
                    required
                  />
                  <p style={{ margin: '0px'}}>in stock</p>
                  <input
                    className="main-input"
                    name="inStock"
                    type="text"
                    placeholder="inStock"
                    defaultValue={myDummyData[0].inStock}  
                    required
                  />

                  <button className="bt2">
                    update
                  </button>
                </div>
              </div>
            </div>
            <div className="d1" />
            <div className="d2" />

              </div>


      </>

  );
};

export default Update;
