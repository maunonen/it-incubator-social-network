import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setAuthUserData, SetUserDataType} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

export type CombinedHeaderContainer = MapStateToPropsHeaderContainerType & MapDispatchHeaderContainerType

class HeaderContainer extends React.Component<CombinedHeaderContainer> {

    componentDidMount() {
        usersAPI.authMe()
            //@ts-ignore
            .then(data => {
                if (data.resultCode === 0) {
                    //@ts-ignore
                    let {login, email, id: userId} = data.data
                    this.props.setAuthUserData(userId, email, login)
                }
            });
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
    setAuthUserData: (userId: number, email: string, login: string) => SetUserDataType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsHeaderContainerType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect<MapStateToPropsHeaderContainerType, MapDispatchHeaderContainerType, {}, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer)