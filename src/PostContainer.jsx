/* eslint-disable react/prop-types */
import './Post.css';
export default function Post({postContainer}) {
    console.log(postContainer);
    const {userId, title, body} = postContainer;
    return(
        <div className='box'>
            <p>User Id: {userId}</p>
            <p>User Title: {title}</p>
            <p>User Body: {body}</p>
        </div>
    )
}