import React from 'react';
import classes from './Post.module.css'

export type PostType = {
    id : number
    message : string
    likesCount : number
}

const Post : React.FC<PostType> = ( props  ) => {
    return (
        <div className={classes.item}>
            { props.message }
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post