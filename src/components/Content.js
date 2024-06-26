import React from 'react'
import {Container} from "@chakra-ui/react"
import axios from 'axios'

function Content() {

    const getCurrency = async()=> {
        const res= await axios("https://rest.coinapi.io/v1/exchangerate/BTC",{headers:{"X-CoinAPI-Key":"C778505A-2E38-4142-8B31-06173B0569B1"}})
        return res.data
    }

        





  return (
    <Container minWidth="60%">

            {getCurrency.map((item)=> (
                <div>{item.asset_id_quote} || {item.time} || {item.rate}</div>
            ))}


    </Container>
  )
}

export default Content