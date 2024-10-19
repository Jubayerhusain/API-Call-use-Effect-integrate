/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Post from './PostContainer';

export default function AllPost() {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPost(data))
    } ,[])
  return (
    <div>
      <h2> All Post Length: {post.length}</h2>
      <br />
      <br />
      {
        post.map(PostCon => <Post postContainer = {PostCon}></Post>)
      }
    </div>
  );
}
