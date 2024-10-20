 import "./UserList.css"
 import { DataGrid } from '@mui/x-data-grid';
 import {DeleteOutline} from '@mui/icons-material';
import { userData, userRows } from "../../dummyData";
import {Link} from "react-router-dom"
import { useState } from "react";

 const UserList = () => {

  const [data,setData] = useState(userRows)
  
  const handleDelet = (id) => {
    setData(data.filter( (item) => item.id !== id ))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'user', headerName: 'user', width: 250, renderCell:(params) => {
      return (
        <div className="userlistuser">
          <img className="userlistimg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    }  },
    { field: 'email', headerName: 'Email', width: 250, },
    {
      field: 'status',
      headerName: 'status',
      width: 200,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return(
          <div className="useraction">

            <Link to={"/user/" + params.row.id}>
              <button className="userlistEdit">Edit</button>
            </Link>
            <DeleteOutline onClick={() => handleDelet(params.row.id)} className="userlistdelet" />
          </div>
        )
      }
    },
    
  ];
  
    return(
      <div className="userlist">
        <DataGrid
        rows={data} disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
      </div>
    )
 }

 export default UserList