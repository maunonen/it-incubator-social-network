import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

const MyPosts : React.FC<ProfilePageType> = ( props ) => {

    /*const addPost = (  event: React.MouseEvent<HTMLElement>) => {
        console.log('Add post');
    }*/

    //let newPostElement  = React.createRef();
    let newPostElement  = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current) {
            let text  = newPostElement.current.value;
            props.addPost(text);
            console.log(text);
        } else {
            console.log("Value not defined");
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>New post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { props.posts.map((post) => {
                    return <Post
                        key = {post.id}
                        id={post.id}
                        message={post.message}
                        likesCount={post.likesCount}
                    />
                })}
            </div>
        </div>
    )
}

export default MyPosts