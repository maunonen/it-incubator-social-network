import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

 export type PostType = {
     id : number
     message : string
     likesCount : number
 }


const MyPosts = () => {


    let messageData = [
        { id : 1, Message : 'Some post number one', likesCount : 10},
        { id : 2, Message : 'yet another post number one' , likesCount : 20},
        { id : 3, Message : 'Post number two' , likesCount : 30},
        { id : 4, Message : 'Some post number three' , likesCount : 40}
    ]
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
                    id={1}
                    message={"How are you"}
                    likesCount={6}
                />
                <Post
                    id={2}
                    message={"This is my first"}
                    likesCount={6}
                />
            </div>
        </div>
    )
}

export default MyPosts