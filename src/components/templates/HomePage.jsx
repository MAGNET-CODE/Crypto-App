import { useState } from "react"
import { useEffect } from "react"
import TableCoins from "../modules/TableCoins";

// may api key
// CG-hj9aLi2n4LGPxLVrY3uy83X1
function HomePage() {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-hj9aLi2n4LGPxLVrY3uy83X1"
        )
        .then(res => res.json())
        .then(json => setCoins(json))
    }, [])
  return (
    <div>
        <TableCoins coins={coins} />
    </div>
  )
}

export default HomePage