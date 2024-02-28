import { useState } from "react"
import { useEffect } from "react"
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi"
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("usd");
    const [chart, setChart] = useState(null);

    useEffect(() => {
      const getData = async () => {
        try {
          setIsloading(true);
          const res = await fetch(getCoinList(page, currency));
          const json = await res.json();
          setCoins(json);
          setIsloading(false);
        } catch (error) {
          console.log(error)
        }
      };
      getData();
    }, [page, currency])
  return (
    <div>
        <Search currency={currency} setCurrency={setCurrency} />
        <TableCoins coins={coins} isloading={isloading} setChart={setChart} />
        <Pagination page={page} setPage={setPage} />
        {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  )
}

export default HomePage