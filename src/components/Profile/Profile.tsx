import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {
    CombinedProfileContainerPropsType,
} from "./ProfileContainer";


const Profile : React.FC<CombinedProfileContainerPropsType> = ( props ) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile