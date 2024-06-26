import React, { useState } from 'react'
import {Input} from "@chakra-ui/react"

function Search({search,setSearch}) {


    


  return (
    <div>
        <Input value={search} onChange={(e)=> setSearch(e.target.value)} border="1px solid gray" margin="30px 0 30px 0" placeholder='Search'/>
    </div>
  )
}

export default Search