import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "BlueBoi26",
      postImage: "https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508_640.jpg",
      likes: 12,
      timestamp: "2d"
    },
    {
      user: "redian_",
      postImage: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      likes: 81,
      timestamp: "4h"
    },
    {
      user: "Julio",
      postImage: "https://cdn.motor1.com/images/mgl/QeeWgN/s3/zenvo-tsr-s.jpg",
      likes: 5,
      timestamp: "1h"
    }
  ]);
  return <div className='timeline'>
    <div className="timeline__left">
      <div className="timeline__posts">
        {posts.map(post => (
          <Post  user={post.user}
          postImage={post.postImage}
          likes={post.likes}
          timestamp={post.timestamp} />
        ))}
      </div>
    </div>
    <div className="timeline__right">
      <Suggestions />
    </div>
    </div>
  
}

export default Timeline