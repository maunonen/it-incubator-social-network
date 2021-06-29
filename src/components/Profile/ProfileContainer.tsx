import React from 'react';
import Profile from "./Profile";

import {connect} from "react-redux";
import {getMyProfile, getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Simulate} from "react-dom/test-utils";
import { compose } from 'redux';


// Type for ProfileContainerPropsType
interface MatchParams {
    userId: string
}

interface ProfileContainerPropsType extends RouteComponentProps<MatchParams> {
}

export type CombinedProfileContainerPropsType = MapStateToPropsProfileContainerType &
    MapDispatchToPropsProfileContainerType &
    ProfileContainerPropsType

class ProfileContainer extends React.Component<CombinedProfileContainerPropsType> {

    componentDidMount() {
        let userId = +this.props.match?.params?.userId
        if (!userId) {
            userId = 17314
            // this.props.getMyProfile()
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        console.log('Status', this.props.status)
        //@ts-ignore
    }

    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </>
        )
    }
}



export type MapStateToPropsProfileContainerType =
    {
        profile: ProfileType | null
        status : string
    }

export type MapDispatchToPropsProfileContainerType =
    {
        getUserProfile: (userId: number) => void
        getStatus : (userId : number ) => void
        updateStatus : ( status : string) => void
        getMyProfile : () => void
    }


let mapStateToProps = (state: AppStateType): MapStateToPropsProfileContainerType => (
    {
        profile: state.profilePage.profile,
        status : state.profilePage.status
    })

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, getMyProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)

