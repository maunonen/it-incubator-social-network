import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state : any) => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}
// comment

const mapDispatchToProps = (dispatch : any) => {
    return {
        updateNewPostText : (text : any) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost : (newPost : string) => {
            dispatch(addPostActionCreator( newPost ))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer