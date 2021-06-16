import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {MapDispatchToPropsMyPostType, MapStateToPropsMyPostType} from "./MyPostsContainer";

export type CombinedPropsMyPostsType = MapStateToPropsMyPostType & MapDispatchToPropsMyPostType

const MyPosts : React.FC<CombinedPropsMyPostsType> = ( props ) => {

    let newPostElement  = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current) {
            props.addPost();
        } else {
            console.log("Value not defined");
        }
    }
    const updatePostText = () => {
        if(newPostElement.current) {
            let text  = newPostElement.current.value;
            props.updateNewPostText(text);
        } else {
            console.log("Value not defined");
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={updatePostText}
                    ></textarea>
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