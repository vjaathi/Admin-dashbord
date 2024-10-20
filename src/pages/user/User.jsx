import {Link} from "react-router-dom"
import "./User.css"
import {CalendarToday, LocationSearching,Publish , MailOutline, Person, PhoneAndroid} from '@mui/icons-material';

const User = () => {
  return(
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddBtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Licha kos</span>
              <span className="userShowUserjob">Softwere Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <sapn className="userShowTitle">Accound Detailes</sapn>
            <div className="userShowInfo">
              <Person  className="userShowIcon"/>
              <span className="userInfoTitle">lichakos66</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userInfoTitle">08.02.1998</span>
            </div>

            <sapn className="userShowTitle">Accound Detailes</sapn>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userInfoTitle">+91 735 642 9827</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userInfoTitle">lichakos66@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userInfoTitle">Hydrabed | IND</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="lichakos66" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Licha kos" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="lichakos66@gmail.com" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+91 735 642 9827" className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Adress</label>
                <input type="text" placeholder="Hydrabed | IND" className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://media.istockphoto.com/id/2163983144/photo/latin-woman-with-short-hair-in-grey-shirt-smiling-and-gazing-upwards-against-a-white-backdrop.webp?a=1&b=1&s=612x612&w=0&k=20&c=b5QFSONxJVsGYPCiy08tc-1WxBdJkLoBOV67eKAOTSY=" alt="" className="userUpdateImgRight" />
                <label htmlFor="file"> <Publish className="userUpdateIconRight" /> </label>
                <input type="file" id="file" className="userUpdateInputRight" />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User