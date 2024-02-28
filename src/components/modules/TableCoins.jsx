import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableCoins.module.css"
import { marketChart } from "../../services/cryptoApi"
import { RotatingLines } from 'react-loader-spinner';
function TableCoins({ coins, isloading, setChart }) {
  return (
    <div className={styles.container}>
      {
        isloading ? (
          <RotatingLines strokeColor="#3874ff" strokeWidth="3" />
        ) : (
          <table className={styles.table}>
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
              coins.map(coin => <TableRow coin={coin} key={coin.id} setChart={setChart} />)
            }
          </tbody>
        </table>
        )
      }
    </div>
  )
}

export default TableCoins
const TableRow = ({ coin, setChart }) => {

  const {
    id, 
    name, 
    image, 
    symbol, 
    current_price, 
    price_change_percentage_24h, 
    total_volume
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      // console.log(json)
      setChart({...json, coin})
    } catch (error) {
      setChart(null)
    }
    // setChart(true)
  }
  return(
            <tr>
              <td>
                <div className={styles.symbol} onClick={showHandler} >
                  <img src={image} alt={name} />
                  <span>{symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>{name}</td>
              <td>${current_price.toLocaleString()}</td>
              <td className={price_change_percentage_24h > 0 ? styles.green : styles.red} >{price_change_percentage_24h.toFixed(2)}%</td>
              <td>{total_volume.toLocaleString()}</td>
              <td>
                <img src={
                  price_change_percentage_24h > 0 ? chartUp : chartDown
                } alt={name} />
              </td>
            </tr>
  )
}