import React from 'react'
import "./Home.css"
import HTCon from './HTCon';
import HBCon from './HBCon';

function Home({users, stockImages}) {
  return (
    <div>
<h1 id="home-title"> Vizpo </h1>

<HTCon stockImages={stockImages}/>
<HBCon users={users}/>

    </div>
  )
}

export default Home