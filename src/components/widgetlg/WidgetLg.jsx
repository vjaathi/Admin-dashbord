import "./WidgetLg.css"

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={"widgetlgbtn " + type }>{type}</button>
  }

   return(
     <div className="widgetlg">
       <div className="widgetlgtitle">Latest Transaction</div>
       <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Customer</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Status</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
            <span className="widgetlgname">Pradeep</span>
          </td>

          <td className="widgetlgdate">09 Oct 2024</td>
          <td className="widgetlgamound">$122.00</td>
          <td className="widgetlgstatus"> <Button type={"Approved"} /></td>

        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
            <span className="widgetlgname">Pradeep</span>
          </td>

          <td className="widgetlgdate">09 Oct 2024</td>
          <td className="widgetlgamound">$122.00</td>
          <td className="widgetlgstatus"> <Button type={"Pending"} /></td>

        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
            <span className="widgetlgname">Pradeep</span>
          </td>

          <td className="widgetlgdate">09 Oct 2024</td>
          <td className="widgetlgamound">$122.00</td>
          <td className="widgetlgstatus"> <Button type={"Declined"} /></td>

        </tr>
        <tr className="widgetlgtr">
          <td className="widgetlguser">
            <img src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
            <span className="widgetlgname">Pradeep</span>
          </td>

          <td className="widgetlgdate">09 Oct 2024</td>
          <td className="widgetlgamound">$122.00</td>
          <td className="widgetlgstatus"> <Button type={"Approved"} /></td>
        </tr>
       </table>
     </div>
   )
}

export default WidgetLg