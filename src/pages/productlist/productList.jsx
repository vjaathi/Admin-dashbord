import "./ProductList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { userData, productRows } from "../../dummyData";
import {Link} from "react-router-dom"
import { useState } from "react";

const ProductList = () => {

   const [data,setData] = useState(productRows)

   const handleDelet = (id) => {
      setData(data.filter( (item) => item.id !== id ))
    }
  
    const columns = [
      { field: 'id', headerName: 'ID', width: 110 },
      { field: 'product', headerName: 'product', width: 250, renderCell:(params) => {
        return (
          <div className="productlistitem">
            <img className="productlistimg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }  },

      {
         field: 'Stock',
         headerName: 'Stock',
         width: 200,
       },

      {
         field: 'status',
         headerName: 'status',
         width: 200,
      },
      { field: 'price', headerName: 'Price', width: 250, },
      
      {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
          return(
            <div className="useraction">
              <Link to={"/product/" + params.row.id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline onClick={() => handleDelet(params.row.id)} className="productlistdelet" />
            </div>
          )
        }
      },
      
    ];

   return(
    <div className="productList">
       <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
   ) 
}

export default ProductList