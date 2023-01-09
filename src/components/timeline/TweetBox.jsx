import { Avatar, Button } from '@mui/material'
import React from 'react'

import './TweetBox.css'

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input type="text" placeholder="いまどうしてる？"/>
        </div>
        <input type="text" placeholder="画像のURLを入力してください" className="tweetBox__imageInput"/>
        <Button type="submit" className="tweetBox__tweetButton">
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
