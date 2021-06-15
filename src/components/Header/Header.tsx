import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css'
import {CombinedHeaderContainer} from "./HeaderContainer";

export type HeaderPropsType = CombinedHeaderContainer

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={classes.header}>
            <img alt={"header img"}
                 src="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png"/>
            <div className={classes.loginBlock}>
                {
                    props.isAuth ?
                        props.login :
                        <NavLink to={'/login'}>
                            Login
                        </NavLink>
                }
            </div>
        </header>
    )
}

export default Header