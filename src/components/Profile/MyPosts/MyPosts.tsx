import React from 'react';
import classes from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div>
                <img alt={"content img"} src="http://ekkotek.com/MobileApps/youtubeApi/examples/images/Swan_large.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My Post
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>1</div>
                    <div className={classes.item}>2</div>
                    <div className={classes.item}>3</div>
                </div>
            </div>
            Main Content
        </div>
    )
}

export default MyPosts