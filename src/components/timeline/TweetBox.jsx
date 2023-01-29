import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'

import { collection, addDoc, serverTimestamp} from 'firebase/firestore'

import './TweetBox.css'
import db from '../../firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  // Firebaseのデータベースにデータを追加する
  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, 'posts'), {
      displayName: 'Reactプログラミング',
          username: 'react_practice',
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          timestamp: serverTimestamp(), // 現在の時間を保存する
    })

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            type="text"
            value={tweetMessage}
            placeholder="いまどうしてる？"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          value={tweetImage}
          placeholder="画像のURLを入力してください"
          className="tweetBox__imageInput"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          className="tweetBox__tweetButton"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
