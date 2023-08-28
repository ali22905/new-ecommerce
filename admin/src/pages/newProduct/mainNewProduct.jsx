// import { useEffect, useState } from "react";
// import axios from 'axios'
// import "./newProduct.css";


// const availableTypes = ['tshirt', 'pants', 'shoes'];
// const availableSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
// const availableGenders = ['male', 'female', 'unisex'];
// const availableSizeTypes = ['men', 'women', 'kids']


// export default function NewProduct() {
//   const [data, setData] = useState({
//     title: '',
//     desc: '',
//     price: 0,
//     gender: '',
//     type: '',
//     sizeType: '',
//     sizes: [],
//     kidsSizeFrom: '',
//     kidsSizeTo: '',
//     colors: [],
//     imgs: [],
//     inStock: true,
//   });

//   const handleChange = (e) => {
//     setData(prev => {return {
//       ...prev,
//       [e.target.name]: e.target.value
//     }})
//   }

//   console.log(data)

//   const handleFromChange = (e) => {
//     setData(prev => {return {
//       ...prev,
      
//     }})
//   }


//   const handleSubmit = (e) => {
//     e.preventDefault()
//   }

//   return (
//     <div className="newProduct">
//       <h1 className="addProductTitle">New Product</h1>
//       <form className="addProductForm">
//         <div className="addProductItem">
//           <label>Image</label>
//           <input type="file" id="file" />
//         </div>
//         <div className="addProductItem">
//           <label>Title</label>
//           <input type="text" placeholder="product title" name="title" onChange={handleChange} value={data.title} />
//         </div>
//         <div className="addProductItem">
//           <label>desc</label>
//           <input type="text" placeholder="description" name="desc" onChange={handleChange} value={data.desc} />
//         </div>
//         <div className="addProductItem">
//           <label>price</label>
//           <input type="number" placeholder="price" name="price" onChange={handleChange} value={data.price} />
//         </div>
//         <div className="addProductItem">
//           <label>In stock</label>
//           <select onChange={handleChange} name="inStock" id="active" value={data.inStock.toString()} >
//             <option value="true">Yes</option>
//             <option value="false">No</option>
//           </select>
//         </div>
//         <div className="addProductItem">
//           <label>Gender</label>
//           <select onChange={handleChange} name="gender" id="active" value={data.gender} >
//             {availableGenders.map(gender => (
//               <option key={gender} value={gender}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</option>
//             ))}
//           </select>
//         </div>
//         <div className="addProductItem">
//           <label>Product type</label>
//           <select onChange={handleChange} name="type" id="active" value={data.type} >
//             {availableTypes.map(type => (
//               <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
//             ))}
//           </select>
//         </div>
//         <div className="addProductItem">
//           <label>Size type</label>
//           <select onChange={handleChange} name="sizeType" id="active" value={data.sizeType} >
//             {availableSizeTypes.map(type => (
//               <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
//             ))}
//           </select>
//         </div>
//         <div className="addProductItem">
//           <label>Sizes</label>
//           <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
//             {data.sizeType === 'kids' 
//             ? (<h3>from <input type="number" name="kidsSizeFrom" onChange={handleChange} value={data.kidsSizeFrom} /> to <input name="kidsSizeTo" onChange={handleChange} value={data.kidsSizeTo} type="number" /></h3>)
//             : availableSizes.map(size => (
//                 <button
//                   className={`sizes-button toggle-heading open animated-button`}
//                   key={size}
//                   onClick={(e) =>{
//                       e.preventDefault();
//                       setData((prev) => {
//                         return {
//                           ...prev,
//                           sizes: prev.sizes.includes(size)
//                             ? prev.sizes.filter((s) => s !== size)
//                             : [...prev.sizes, size],
//                         };
//                       })
//                     }
//                   }
//                   style={{
//                     boxShadow: data.sizes.includes(size) && " 0 0 0 5px rgba(0, 0, 0, 0.2)",
//                     color: data.sizes.includes(size) && "#ffffff",
//                     background: data.sizes.includes(size) && "#232323",
//                     display: "inlineBlock",
//                   }}
//                 >
//                   {size}
//                 </button>
//               ))
//             }
//           </div>
//         </div>
//         <button onClick={handleSubmit} className="addProductButton">Create</button>
//       </form>
//     </div>
//   );
// }
