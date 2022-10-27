import React from 'react'
import FeedCon from "./FeedCon"
import "./Feed.css"

function Feed({feedImages}) {
  return (
    
    <div>

<FeedCon feedImages={feedImages} />

    </div>
  )
}

export default Feed