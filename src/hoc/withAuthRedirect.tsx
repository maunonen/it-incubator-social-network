import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

export type MapStateToPropsProfileContainerRedirectType =
    {
        isAuth: boolean
    }

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsProfileContainerRedirectType => (
    { isAuth: state.auth.isAuth})

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }

    //@ts-ignore
    let ConnecetedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnecetedAuthRedirectComponent
}