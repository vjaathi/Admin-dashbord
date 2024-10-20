
import "./Sidebar.css"
import {LineStyle,Timeline,TrendingUp,PersonOutline,Inventory2,PaidOutlined,AssessmentTwoTone,EmailOutlined,ChatOutlined,TextsmsOutlined,ManageSearchTwoTone,TimelineTwoTone,ReportGmailerrorredTwoTone} from '@mui/icons-material';
import {Link} from "react-router-dom"

const Sidebar = () => {
    return(
      <div className="sidebar">
        <div className="sidebar-wraper">
          <div className="sidebar-menu">
            <h3 className="sidebar-title">DashBoard</h3>
            <ul className="sidebar-list">
              <Link to="/" className="sidebar-list-link"> 
                <li className="sidebar-listitem ">
                  <LineStyle  className="sidebaricon" />
                  Home
                </li>
              </Link>
              <li className="sidebar-listitem">
                <Timeline  className="sidebaricon" />
                Analytics
              </li>
              <li className="sidebar-listitem">
                <TrendingUp  className="sidebaricon" />
                Sales
              </li>
            </ul>
          </div>

          <div className="sidebar-menu">
            <h3 className="sidebar-title">Quick Menu</h3>
            <ul className="sidebar-list">
              <Link to="/users" className="sidebar-list-link"> 
              <li className="sidebar-listitem">
                <PersonOutline className="sidebaricon" />
                User
              </li>
              </Link>

              <Link to="/products" className="sidebar-list-link"> 
                <li className="sidebar-listitem">
                  <Inventory2 className="sidebaricon" />
                  Products
                </li>
              </Link>

              <li className="sidebar-listitem">
                <PaidOutlined className="sidebaricon" />
                Transaction
              </li>
              <li className="sidebar-listitem">
                <AssessmentTwoTone className="sidebaricon" />
                Reports
              </li>
            </ul>
          </div>

          <div className="sidebar-menu">
            <h3 className="sidebar-title">Notifications</h3>
            <ul className="sidebar-list">
              <li className="sidebar-listitem">
                <EmailOutlined className="sidebaricon" />
                Mail
              </li>
              <li className="sidebar-listitem">
                <ChatOutlined className="sidebaricon" />
                Feedback
              </li>
              <li className="sidebar-listitem">
                <TextsmsOutlined className="sidebaricon" />
                Messages
              </li>
            </ul>
          </div>

          <div className="sidebar-menu">
            <h3 className="sidebar-title">Staff</h3>
            <ul className="sidebar-list">
              <li className="sidebar-listitem">
                <ManageSearchTwoTone className="sidebaricon" />
                Manage
              </li>
              <li className="sidebar-listitem">
                <TimelineTwoTone className="sidebaricon" />
                Analytics
              </li>
              <li className="sidebar-listitem">
                <ReportGmailerrorredTwoTone className="sidebaricon" />
                Reports
              </li>
            </ul>
          </div>

        </div>
      </div>
    )
} 

export default Sidebar