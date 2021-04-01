import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt={"header img"} src="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png"/>
        </header>
    )
}

export default Header