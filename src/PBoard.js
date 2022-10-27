import React from 'react'

function PBoard({image}) {
  return (
    <div className="PBoard">

<img 
className="Pboard-img"
src={image.download_url}
 alt={image.author}
 />


    </div>
  )
}

export default PBoard