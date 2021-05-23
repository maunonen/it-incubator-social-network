import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {ProfilePageType} from "../../redux/state";



const Profile : React.FC<ProfilePageType> = ( props : any ) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts }
                addPost={props.addPost}
            />
        </div>
    )
}

export default Profile