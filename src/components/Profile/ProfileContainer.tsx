import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

export type CombinedProfileContainerPropsType = MapStateToPropsProfileContainerType & MapDispatchToPropsProfileContainerType

class ProfileContainer extends React.Component<CombinedProfileContainerPropsType> {

    componentDidMount() {
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12`).then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <>
               <Profile { ...this.props}/>
            </>
        )
    }
}

export type MapStateToPropsProfileContainerType = {
    profile : ProfileType
}

export type MapDispatchToPropsProfileContainerType = {
    setUserProfile : ( profile : ProfileType) => void
}

let mapStateToProps = (state : any) => ({
        profile : state.profilePage.profile
    }
)

export default connect<MapStateToPropsProfileContainerType, MapDispatchToPropsProfileContainerType, {}, AppStateType >(mapStateToProps, { setUserProfile})(ProfileContainer)