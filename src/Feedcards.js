import {React, useState} from 'react'

function Feedcards({feed}) {
const [liked, setLiked] = useState(0)

  function handleClick(){
    setLiked(liked + 1)
  }

  return (
    <div className="feed">
<div className="column">
  <div className="post-setting">...</div>
    <img
    className="feed-img"
     src={feed.download_url}
      alt="feed"/>
      <div className="impressions">
      <p className="heart"
      onClick={handleClick}
      >❤️: {liked}</p>

      <p className="comment"
      
      >💬: </p>

      <p className="saved"
      
      >⬇️: </p>
      </div>
      <div className="line"> </div>
      <p className="photocred">Taken by: {feed.author}</p>
</div>

    </div>
  )
}

export default Feedcards