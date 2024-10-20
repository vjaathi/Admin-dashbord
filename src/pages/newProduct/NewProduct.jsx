import "./NewProduct.css"

const NewProduct = () => {
  return(
    <div className="newproduct">
      <h1 className="newProductTitle">New Products</h1>
      <form className="addNewProductForm">
        <div className="addNewProductItem">
          <label>Image</label>
          <input type="file" />
        </div>
        <div className="addNewProductItem">
          <label>Name</label>
          <input type="text" placeholder="Iphone 15" />
        </div>
        <div className="addNewProductItem">
          <label>Stock</label>
          <input type="text" placeholder="134" />
        </div>
        <div className="addNewProductItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>  
      </form>
      <button className="addNewProductBtn">Create</button>
    </div>
  )
}

export default NewProduct