import "./Navbar.css"
import {Notifications,Language,Settings} from '@mui/icons-material';
import myimg from "../assets/IMG_9932.jpg"

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="navbar-wraper">
        <div className="navbar-left">
          <span className="logo">Admin Mr Sam</span>
        </div>
        <div className="navbar-right">
          <div className="navbarIcon-Container">
            <Notifications />
            <span className="navIcon-batch">2</span>
          </div>
          <div className="navbarIcon-Container">
            <Language />
            <span className="navIcon-batch">2</span>
          </div>
          <div className="navbarIcon-Container">
            <Settings />
            <span className="navIcon-batch">2</span>
          </div>
          <img src={myimg} alt="" className="nav-avator" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;