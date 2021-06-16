import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";


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
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        //@ts-ignore
        usersAPI.getProfile(userId)
            //@ts-ignore
            .then(data => {
                this.props.setUserProfile(data)
            });
    }

    render() {
        return (
            <>
                <Profile {...this.props}/>
            </>
        )
    }
}

export type MapStateToPropsProfileContainerType = {
    profile: ProfileType | null
}

export type MapDispatchToPropsProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsProfileContainerType => ({
        profile: state.profilePage.profile
    }
)

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsProfileContainerType, MapDispatchToPropsProfileContainerType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)