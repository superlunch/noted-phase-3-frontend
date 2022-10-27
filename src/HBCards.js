import React from 'react'


function HBCards({user}) {


  return (
    <div className="card">

<div className="Card-image">
    {/* <img src={stockImages.download_url} alt=''/> */}
         </div>
<div className="Card-info">
<img className="avatar" src={user.imageUrl} alt={user.username} />
<h4 className="Card-username">{user.firstName}</h4>
</div>


    </div>
  )
}

export default HBCards


//mockaroo api keys are: user.username, user.avatar_url

// when nusing dummy api swap the names after users to apis key 