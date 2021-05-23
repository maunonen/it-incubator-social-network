import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile : React.FC<any> = ( props : any ) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                /*posts={props.posts }*/
                /*addPost={props.addPost}*/
            />
        </div>
    )
}

export default Profile