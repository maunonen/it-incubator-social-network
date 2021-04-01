import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt={"content img"} src="https://avia-all.ru/uploads/posts/2019-04/medium/1554499688_2.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo