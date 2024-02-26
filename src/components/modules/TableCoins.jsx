import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableCoins({ coins }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            coins.map(coin => <TableRow coin={coin} key={coin.id} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableCoins
const TableRow = ({ coin: {name, image, symbol, current_price, price_change_percentage_24h, total_volume} }) => {
  return(
            <tr>
              <td>
                <div>
                  <img src={image} alt={name} />
                  <span>{symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>{name}</td>
              <td>${current_price.toLocaleString()}</td>
              <td>{price_change_percentage_24h.toFixed(2)}%</td>
              <td>{total_volume.toLocaleString()}</td>
              <td>
                <img src={
                  price_change_percentage_24h > 0 ? chartUp : chartDown
                } alt={name} />
              </td>
            </tr>
  )
}