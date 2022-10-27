import React from 'react'
import HBCards from "./HBCards"



function HBCon({users}) {
  return (

<div className="HBContainer">
{users.map((user) =>(
    <HBCards key={user.id} user={user}/>
))}
</div>
        
   
  )
}

export default HBCon