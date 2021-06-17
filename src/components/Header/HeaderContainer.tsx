import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUser} from "../../redux/auth-reducer";

export type CombinedHeaderContainer = MapStateToPropsHeaderContainerType & MapDispatchHeaderContainerType

class HeaderContainer extends React.Component<CombinedHeaderContainer> {

    componentDidMount() {
        this.props.getAuthUser()
    }

    render() {
        return (<Header {...this.props}/>)
    }
}

export type MapStateToPropsHeaderContainerType = {
    isAuth: boolean
    login: string | null
}

export type MapDispatchHeaderContainerType = {
    getAuthUser: () => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsHeaderContainerType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect<MapStateToPropsHeaderContainerType, MapDispatchHeaderContainerType, {}, AppStateType>(mapStateToProps, {getAuthUser})(HeaderContainer)