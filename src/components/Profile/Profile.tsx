import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {
    CombinedProfileContainerPropsType,
} from "./ProfileContainer";


const Profile: React.FC<CombinedProfileContainerPropsType> = (props) => {
    console.log('Profile props', props)
    return (
        <div>
            {props.profile && <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />}
            <MyPostsContainer/>
        </div>
    )
}

export default Profile