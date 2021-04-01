import React from 'react';
import classes from './Post.module.css'
import {PostType} from "../MyPosts";

/*type Messagetype = {
    message : string
    src : string
    likesCount : number
}*/

const Post = ( props : PostType) => {
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