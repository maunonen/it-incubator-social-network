import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post
                    message={"How are you"}
                    src={"https://picsum.photos/100/100?random=1"}
                    likesCount={6}
                />
                <Post
                    message={"This is my first"}
                    src={"https://picsum.photos/100/100?random=2"}
                    likesCount={6}
                />
            </div>
        </div>
    )
}

export default MyPosts