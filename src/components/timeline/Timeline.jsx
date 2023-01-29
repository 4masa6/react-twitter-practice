import React, { useEffect, useState } from 'react'

import Post from './Post'
import TweetBox from './TweetBox'

import "./Timeline.css"

import db from '../../firebase'
import { collection, getDocs, query, orderBy } from "firebase/firestore"; 

function Timeline() {

  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    const postData = collection(db, 'posts');
    const q = query(postData, orderBy('timestamp', 'desc')); // 時間を降順に取得
    getDocs(q).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    })
  }, [])

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default Timeline
