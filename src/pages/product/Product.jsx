import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import "./Product.css"
import {Publish} from "@mui/icons-material"

const Product = () => {
  return(
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproducts">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="Sales Performence" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://images.unsplash.com/photo-1695764043470-aca99dc4817b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" alt="" className="productInfoImg" />
            <span className="productName">Iphone 15</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfokey">id :</span>
              <span className="productInfoValue">132</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">sales :</span>
              <span className="productInfoValue">5342</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">active :</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">Stock :</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <div className="productForm">
          <div className="productFormLeft">
            <label>Product Name </label>
            <input type="text" placeholder="Iphone 15" />
            <label > In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label >Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="https://images.unsplash.com/photo-1709528922663-429c9259f770?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8" alt=""  className="productUploadImg" />
              <label for="file" > <Publish  className="productUploadIcon"/>  </label>
              <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="productBtn">Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product