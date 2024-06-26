import React, { useEffect, useState } from 'react'
import {Container} from "@chakra-ui/react"
import axios from 'axios'
import { List } from 'antd'
import Search from './Search'

function Content({search,setSearch}) {

    const [currency, setCurrency] = useState([])

    const getCurrency = async()=> {
        await axios("https://rest.coinapi.io/v1/exchangerate/BTC",{headers:{"X-CoinAPI-Key":"C778505A-2E38-4142-8B31-06173B0569B1"}})
        .then(res=>setCurrency(res.data.rates))
    }

  
    useEffect(()=>{
        getCurrency()

    },[])
        
    // console.log(getCurrency)

    const filteredCurrency = currency.filter((item)=> item.asset_id_quote.toLowerCase().includes(search.toLowerCase()))


  return (
    <Container marginBottom="60px" minWidth="60%">


        <Search search={search} setSearch={setSearch}/>

    

    <List 
     dataSource={filteredCurrency}
     
     pagination={1}
     renderItem={(item)=> {

        const day = item.time.split("T")[0]
        const hours = item.time.split("T")[1].split(".")[0]
       return <List.Item>
            
            <List.Item.Meta title={day + " " + hours} />
            <List.Item.Meta title={item.asset_id_quote}  style={{fontWeight:"bold"}}/>
            <List.Item.Meta title={item.rate} />
            </List.Item>
     }}
     />


    </Container>
  )
}

export default Content