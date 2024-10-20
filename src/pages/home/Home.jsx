import Chart from "../../components/chart/Chart"
import FuaturedInfo from "../../components/fuaturedinfo/FuaturedInfo"
import "./Home.css"
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetsm/WidgetSm"
import WidgetLg from "../../components/widgetlg/WidgetLg"

const Home = () => {
  return(
    <div className="home">
      <FuaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active user" grid />
      <div className="widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home