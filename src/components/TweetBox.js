import React, {useEffect, useState} from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';
import db from '../firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          displayName: "Klexes",
          userName: "klexes23",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:
            "",
        });
    
        setTweetMessage("");
        setTweetImage("");
      };
    

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar/>
                    <input placeholder="Whats happening..." type="text" 
                        value={tweetMessage}
                        onChange={e => setTweetMessage(e.target.value)}>
                    </input>
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image url.." type="text" 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                ></input>
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
