import React from 'react';
import classes from './Post.module.css'

type Messagetype = {
    message : string
    src : string
    likesCount : number
}

const Post = ( props : Messagetype) => {
    return (
        <div className={classes.item}><img src={props.src}/>
            { props.message }
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post