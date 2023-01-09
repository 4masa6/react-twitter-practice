import React from 'react'
import Post from './Post'
import "./Timeline.css"
import TweetBox from './TweetBox'

function Timeline() {
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="Reactプログラミング"
        username="react_practice"
        verified
        text="初めてのツイート"
        image="https://source.unsplash.com/random"
      />
    </div>
  )
}

export default Timeline
