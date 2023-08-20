import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from '../../components/ProductCard'
import './Products.css'


// for drawer 

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import List from '@mui/material/List';

import MenuIcon from '@mui/icons-material/Tune';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const drawerWidth = 240;




const Products = ({ searchQuery, props }) => {


   // js
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('popular');
  const [filters, setFilters] = useState({
    type: '',
    gender: '',
    sizes: [],
  });
  const API_LINK = import.meta.env.VITE_API_KEY

  useEffect(() => {
    if (query) {
      axios.get(`${API_LINK}/products`, {
        params: {
          [query]: true,
          ...filters,
          'search': searchQuery,
        }
      })
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log(`error fetching products with params "${query}:true"`, err)
      })
    }else {
      axios.get(`${API_LINK}/products`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log('error fetching recent added products', err)
      })
    }
  }, [filters, query, searchQuery]); //eslint-disable-line

// for class name in filters 





// for drawer 
const { window } = props || {}; 
const [mobileOpen, setMobileOpen] = useState(false);

const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
};


// for toggling 

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [openSort, setOpenSorts] = useState(false);

  const toggleHeading = () => {
    setIsOpen(prevState => !prevState);
  };
  const toggleHeading1 = () => {
    setIsOpen1(prevState => !prevState);
  };
  const toggleHeading2 = () => {
    setIsOpen2(prevState => !prevState);
  };
  const openSorts = () => {
    setOpenSorts(prevState => !prevState);
  };
  


const drawer = (
  < >
    <Toolbar />
    <Divider />
    <List sx={{top:" 65.6px"}}>

    <div className="products-part" style={{display: 'flex'}}>
        <div className="filters" >
          <div className="type-filter-block">
          <h3 className="h3-drawer" onClick={() => { toggleHeading(); }}>product type <KeyboardArrowRightIcon className={` ${isOpen ? 'open' : ''}`} /></h3>
            <ul>
              {['tshirt', 'pants', 'shoes'].map(type => (
                <li 
                className={`toggle-heading ${isOpen ? 'open' : ''}`}
                key={type}
                onClick={()=> setFilters(prev => {
                  return {
                    ...prev, 
                    type: prev.type===type ? '' : type,
                  }
                })}
                style={{
                  margin: '15px',
                  cursor: 'pointer',
                  color: filters.type === type && 'blue',
                }}>{isOpen && (type)}</li>
              ))}
            </ul>
          </div>
          <div style={{marginTop: '30px'}} className="gender-filter-block">
            <h3 className="h3-drawer" onClick={() => { toggleHeading1(); }}>gender <KeyboardArrowRightIcon className={` ${isOpen1 ? 'open' : ''}`} /></h3>
            <ul>
              {['male', 'female'].map(gender => (
                <li 
                key={gender}
                className={`toggle-heading ${isOpen1 ? 'open' : ''} `}
                onClick={() => {
                  setFilters(prev => ({
                    ...prev,
                    gender: prev.gender === gender ? '' : gender,
                  })) }}
                style={{
                  margin: '15px',
                  cursor: 'pointer',
                  color: filters.gender === gender && 'blue',
                }}>{isOpen1 && (gender)}</li>
              ))}
            </ul>
          </div>
          <div style={{marginTop: '30px'}} className="sizes-filter-block">
          <h3 className="h3-drawer" onClick={() => { toggleHeading2(); }}>sizes <KeyboardArrowRightIcon className={` ${isOpen2 ? 'open' : ''}`} /></h3>
            <ul style={{display: 'flex', flexDirection: 'column', margin: '18px 0', gap: '11px'}}>
              {['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(size => (
                <button 
                className={`sizes-button  toggle-heading ${isOpen2 ? 'open animated-button'  : ''}`}
                key={size} 
                onClick={()=> setFilters(prev => {
                  return {
                    ...prev, 
                    sizes: prev.sizes.includes(size) 
                    ? prev.sizes.filter((s) => s !== size)
                    : [...prev.sizes, size]
                  }
                }) }
                style={{
                  boxShadow: filters.sizes.includes(size) && " 0 0 0 5px rgba(0, 0, 0, 0.2)",
                  color: filters.sizes.includes(size) && "#ffffff",
                  background: filters.sizes.includes(size) && "#232323",
                }}>{isOpen2 && (size)}</button>
              ))}
            </ul>
          </div>
        </div>
        </div>

    </List>
  </>
);

const container = window !== undefined ? () => window().document.body : undefined;






  return (
    <div className="products">



<Box sx={{ display: 'flex' }}>

      {/* <CssBaseline /> */}

{/* the drawer nav bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          zIndex: '1',
          paddingTop: '65.6px',
          boxShadow: 'none',
          backgroundColor: '#fff',
        }}
      >
        <Toolbar>
          <IconButton
            color="#232323"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="drawer-navbar">
          {searchQuery 
          ? <h1 >search: <span style={{color: 'blue'}}>{searchQuery}</span></h1> 
          : <h1 className="h1-drawer-navbar">Products</h1>}
          <br/>


          {/* button open sorts  */}
          <button className={`element-to-display`} onClick={openSorts}> open sorts</button>
          <div  className={`sorts  ${openSort ? 'sortOpen'  : 'sortClosed'}`}>
          <button onClick={()=> setQuery('new') }  className={`${query === "new" && "active1"}  animated-button` }>newest</button>
          <button onClick={()=> setQuery('old')}  className={`${query === "old" && "active1"} animated-button` }>oldest</button>
          <button onClick={()=> setQuery('popular')}  className={`${query === "popular" && "active1"}  animated-button` }>most popular</button>
          <button onClick={()=> setQuery('sold')}  className={`${query === "sold" && "active1"}  animated-button` }>most selled</button>
          </div>

          </Typography> 
        </Toolbar>
        <hr className="MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root"/>
      </AppBar>


{/* the drawer  */}
      <Box
        className="drawer"
        zIndex="-1"
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >


        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          className="drawer"
        >
          <button onClick={handleDrawerToggle}>close button</button>
          {drawer}
        </Drawer>
      </Box>



      <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
          className="drawer"
        >
          {drawer}
        </Drawer>



      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />



        <div className="cards" style={{width: '100%', display: 'flex', maxWidth: '100%', flexWrap: 'wrap',}}>
        {products.length < 1 
          ? (<h2>no products</h2>)
          : products.map(p => (
            <ProductCard id={p._id} sizes={p.sizes} gender={p.gender} views={p.views} sold={p.sold} title={p.title} createdAt={p.createdAt} key={p._id} desc={p.desc} price={p.price} />
          ))
        }
        </div>



      </Box>
    </Box>



    </div>
  )
}



export default Products




































// import axios from "axios";
// import { useEffect, useState } from "react"
// import ProductCard from '../../components/ProductCard'


// const Products = ({ searchQuery }) => {
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState('popular');
//   const [filters, setFilters] = useState({
//     type: '',
//     gender: '',
//     sizes: [],
//   });
//   const API_LINK = import.meta.env.VITE_API_KEY

//   useEffect(() => {
//     if (query) {
//       axios.get(`${API_LINK}/products`, {
//         params: {
//           [query]: true,
//           ...filters,
//           'search': searchQuery,
//         }
//       })
//       .then(res => {
//         setProducts(res.data)
//       })
//       .catch(err => {
//         console.log(`error fetching products with params "${query}:true"`, err)
//       })
//     }else {
//       axios.get(`${API_LINK}/products`)
//       .then(res => {
//         setProducts(res.data)
//       })
//       .catch(err => {
//         console.log('error fetching recent added products', err)
//       })
//     }
//   }, [filters, query, searchQuery]); //eslint-disable-line

//   return (
//     <div className="products">
//       {searchQuery 
//       ? <h1 style={{marginBlock: '50px'}}>search: <span style={{color: 'blue'}}>{searchQuery}</span></h1> 
//       : <h1 style={{marginBlock: '50px'}}>Products</h1>}
//       <div style={{margin: '50px'}} className="sorts">
//         <button onClick={()=> setQuery('new')} style={{backgroundColor: query==='new' && '#aaeeee'}}>newest</button>
//         <button onClick={()=> setQuery('old')} style={{backgroundColor: query==='old' && '#aaeeee'}}>oldest</button>
//         <button onClick={()=> setQuery('popular')} style={{backgroundColor: query==='popular' && '#aaeeee'}}>most popular</button>
//         <button onClick={()=> setQuery('sold')} style={{backgroundColor: query==='sold' && '#aaeeee'}}>most selled</button>
//       </div>
//       <div className="products-part" style={{display: 'flex'}}>
//         <div className="filters" style={{width: '25%'}}>
//           <div className="type-filter-block">
//             <h3>product type</h3>
//             <ul>
//               {['tshirt', 'pants', 'shoes'].map(type => (
//                 <li 
//                 key={type}
//                 onClick={()=> setFilters(prev => {
//                   return {
//                     ...prev, 
//                     type: prev.type===type ? '' : type,
//                   }
//                 })}
//                 style={{
//                   margin: '15px',
//                   cursor: 'pointer',
//                   color: filters.type === type && 'blue',
//                 }}>{type}</li>
//               ))}
//             </ul>
//           </div>
//           <div style={{marginTop: '30px'}} className="gender-filter-block">
//             <h3>gender</h3>
//             <ul>
//               {['male', 'female'].map(gender => (
//                 <li 
//                 key={gender}
//                 onClick={()=> setFilters(prev => {
//                   return {
//                     ...prev,
//                     gender: prev.gender===gender ? '' : gender,
//                   }
//                 })}
//                 style={{
//                   margin: '15px',
//                   cursor: 'pointer',
//                   color: filters.gender === gender && 'blue',
//                 }}>{gender}</li>
//               ))}
//             </ul>
//           </div>
//           <div style={{marginTop: '30px'}} className="sizes-filter-block">
//             <h3>sizes</h3>
//             <ul style={{display: 'flex', flexWrap: 'wrap'}}>
//               {['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(size => (
//                 <button 
//                 key={size} 
//                 onClick={()=> setFilters(prev => {
//                   return {
//                     ...prev, 
//                     sizes: prev.sizes.includes(size) 
//                     ? prev.sizes.filter((s) => s !== size)
//                     : [...prev.sizes, size]
//                   }
//                 })}
//                 style={{
//                   marginInline: '5px', 
//                   backgroundColor: filters.sizes.includes(size) && '#aaeeee'
//                 }}>{size}</button>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="cards" style={{width: '70%', display: 'flex', maxWidth: '70%', flexWrap: 'wrap',}}>
//         {products.length < 1 
//           ? (<h2>no products</h2>)
//           : products.map(p => (
//             <ProductCard sizes={p.sizes} gender={p.gender} views={p.views} sold={p.sold} title={p.title} createdAt={p.createdAt} key={p._id} desc={p.desc} price={p.price} />
//           ))
//         }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Products








