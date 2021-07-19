import React from 'react';
import Profile from "./Profile";

import {connect} from "react-redux";
import {getMyProfile, getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Simulate} from "react-dom/test-utils";
import {compose} from 'redux';
import state from "../../redux/state";


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

        let userId: number | null = +this.props.match?.params?.userId

        if (!userId) {
            /*userId = 17314*/
            // this.props.getMyProfile()
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        console.log('User ID ', userId);
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        console.log('Status', this.props.status);
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
        status: string
        authorizedUserId: number | null
        isAuth: boolean
    }

export type MapDispatchToPropsProfileContainerType =
    {
        getUserProfile: (userId: number | null) => void
        getStatus: (userId: number | null) => void
        updateStatus: (status: string) => void
        getMyProfile: () => void
    }


let mapStateToProps = (state: AppStateType): MapStateToPropsProfileContainerType => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    })

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, getMyProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)

