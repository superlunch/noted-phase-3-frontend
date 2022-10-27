import React from 'react'
import Feedcards from "./Feedcards"


function FeedCon({feedImages}) {
  return (
    <div className="feed">
    
        {feedImages.map((feed)=>(
            <Feedcards key={feed.id} feed={feed} />
        ))}
    </div>
  )
}

export default FeedCon