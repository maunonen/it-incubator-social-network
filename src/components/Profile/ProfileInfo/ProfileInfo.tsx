import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    console.log('Profile props', props.profile)
    if ( !props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt={"content img"} src="https://avia-all.ru/uploads/posts/2019-04/medium/1554499688_2.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : undefined}/>
                <ProfileStatus status={props.status} updateStatus={ props.updateStatus}/>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.contacts.website}</p>
                <p>{props.profile.contacts.mainLink}</p>
            </div>
        </div>
    )
}

export default ProfileInfo