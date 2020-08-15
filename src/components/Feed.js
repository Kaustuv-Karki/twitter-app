import React, {useState, useEffect} from 'react'
import './Feed.css'
import './TweetBox.js'
import TweetBox from './TweetBox.js'
import db from '../firebase'
import Post from './Post'
import FlipMove from 'react-flip-move'

const Feed = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);


    return (
        <div className="feed">
            <div className="feed__header">
                <h1>Home</h1>
            </div>
            <TweetBox/>
            <FlipMove>
            {posts.map(post => (
                <Post
                key={post.text}
                displayName={post.displayName}
                userName={post.userName}
                verified={post.verified}
                avatar={post.avatar}
                text={post.text}
                image={post.image}
                />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
