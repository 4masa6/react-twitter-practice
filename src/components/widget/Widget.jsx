import { Search } from '@mui/icons-material'
import React from 'react'

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

import './Widget.css'

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="キーワード検索" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"1508838714180612100"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://twitter.com'}
          // options={{ text: '#React.js勉強中', via: 'account_name' }}
        />

      </div>
    </div>
  )
}

export default Widget
