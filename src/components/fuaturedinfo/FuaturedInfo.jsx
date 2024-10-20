import "./FuaturedInfo.css"
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';

const FuaturedInfo = () => {
  return(
    <div className="fuatured">
      <div className="fuatureditem">
        <div className="fuaturedtitle">Revenue</div>
        <div className="fuaturedmonybank">
          <span className="fuaturedmony">$2,415</span>
          <span className="fuaturedmonyrate">-11.3 <ArrowDownward className="fuaturedicon negative" /> </span>
        </div>
        <span className="fuaturedsub">Compared to last month</span>
      </div>
      <div className="fuatureditem">
        <div className="fuaturedtitle">Sales</div>
        <div className="fuaturedmonybank">
          <span className="fuaturedmony">$4,415</span>
          <span className="fuaturedmonyrate">-1.34 <ArrowDownward className="fuaturedicon negative" /> </span>
        </div>
        <span className="fuaturedsub">Compared to last month</span>
      </div>
      <div className="fuatureditem">
        <div className="fuaturedtitle">Cost</div>
        <div className="fuaturedmonybank">
          <span className="fuaturedmony">Rs 2,320</span>
          <span className="fuaturedmonyrate">+2.3 <ArrowUpward className="fuaturedicon" /> </span>
        </div>
        <span className="fuaturedsub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FuaturedInfo