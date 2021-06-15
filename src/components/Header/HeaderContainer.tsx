import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import Header from "./Header";
import * as axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {InitialAuthStateType, setAuthUserData, SetUserDataType} from "../../redux/auth-reducer";
import {log} from "util";


export type CombinedHeaderContainer = MapStateToPropsHeaderContainerType & MapDispatchHeaderContainerType

class HeaderContainer extends React.Component<CombinedHeaderContainer> {

    componentDidMount() {
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials : true
            //@ts-ignore
        }).then(response => {
            if ( response.data.resultCode === 0){
                console.log('Login data', response.data)
                //@ts-ignore
                let { login, email, id: userId } = response.data.data
                this.props.setAuthUserData(userId, email, login)
            }
        });
    }

    render() {
        return (<Header { ...this.props }/>)
    }
}
export type MapStateToPropsHeaderContainerType = {
    isAuth : boolean
    login : string | null
}

export type MapDispatchHeaderContainerType = {
    setAuthUserData : (userId: number, email: string, login: string) => SetUserDataType
}

const mapStateToProps = ( state : AppStateType) : MapStateToPropsHeaderContainerType => ({
    isAuth : state.auth.isAuth,
    login : state.auth.login,
})


export default connect<MapStateToPropsHeaderContainerType, MapDispatchHeaderContainerType, {}, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer)