import React from 'react';
import {
    addPostActionCreator,
    CombinedProfileActionCreatorType,
    PostType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsMyPostType = {
    posts : Array<PostType>
    newPostText : string
}

export type MapDispatchToPropsMyPostType = {
    updateNewPostText : ( text : string ) => void
    addPost : (newPost : string) => void
}


const mapStateToProps = (state : AppStateType) : MapStateToPropsMyPostType => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch : Dispatch<CombinedProfileActionCreatorType>) : MapDispatchToPropsMyPostType => {
    return {
        updateNewPostText : (text : string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost : (newPost : string) => {
            dispatch(addPostActionCreator( newPost ))
        }
    }
}

const MyPostsContainer = connect<MapStateToPropsMyPostType, MapDispatchToPropsMyPostType, {}, AppStateType >(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer