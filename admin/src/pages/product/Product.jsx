import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import ImageSlider from '../../components/imageSlider/ImgSlider';

export default function Product() {
  return (
    <div className="product">
      {/* <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div> */}
      <div className="productTop">

        <div className="productTopLeft">
        <ImageSlider />
          {/* <img src="/assets/MS11.jpg" alt="product-img" /> */}
          {/* <Chart data={productData} dataKey="Sales" title="Sales Performance" /> */}
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="/assets/MS11.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Shirt</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">1345</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">price:</span>
              <span className="productInfoValue">513$</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sold:</span>
              <span className="productInfoValue">513</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">gender:</span>
              <span className="productInfoValue">Male</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">yes/150</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">pants</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sizes:</span>
              <span className="productInfoValue">sm/md/lg/</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">colors:</span>
              <span className="productInfoValue">green/yellow</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">orders:</span>
              <span className="productInfoValue">65</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">views:</span>
              <span className="productInfoValue">927</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
