import { useState } from "react"
import { useEffect } from "react"
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi"

function HomePage() {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const res = await fetch(getCoinList());
        const json = await res.json();
        setCoins(json)

      };
      getData();
    }, [])
  return (
    <div>
        <TableCoins coins={coins} />
    </div>
  )
}

export default HomePage