import { useState } from "react"
import { useEffect } from "react"
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi"
import Pagination from "../modules/Pagination";

function HomePage() {
    const [coins, setCoins] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
      const getData = async () => {
        setIsloading(true);
        const res = await fetch(getCoinList(page));
        const json = await res.json();
        setCoins(json);
        setIsloading(false);
      };
      getData();
    }, [page])
  return (
    <div>
        <TableCoins coins={coins} isloading={isloading} />
        <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default HomePage