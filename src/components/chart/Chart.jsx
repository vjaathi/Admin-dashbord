import "./Chart.css"

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title,data,dataKey,grid}) => {


  return (
    <div className="charts">
      <h3 className="charttitle">{title}</h3>

      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="blue" />
          <Line type="monotone" dataKey={dataKey} stroke="blue" />
          <Tooltip />
          <Legend />
          { grid && <CartesianGrid stroke="grey"  strokeDasharray=" 3 5"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart