import React from 'react';
import Profile from "./Profile";

import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


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
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        //@ts-ignore
    }

    render() {
        if ( !this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return (
            <>
                <Profile {...this.props}/>
            </>
        )
    }
}

export type MapStateToPropsProfileContainerType = {
    profile: ProfileType | null
    isAuth : boolean
}

export type MapDispatchToPropsProfileContainerType = {
    getUserProfile: (userId: number) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsProfileContainerType => ({
        profile: state.profilePage.profile,
        isAuth : state.auth.isAuth
    }
)

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsProfileContainerType, MapDispatchToPropsProfileContainerType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)