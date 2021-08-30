import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {MapDispatchToPropsMyPostType, MapStateToPropsMyPostType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../utils/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

export type CombinedPropsMyPostsType = MapStateToPropsMyPostType & MapDispatchToPropsMyPostType

const MyPosts: React.FC<CombinedPropsMyPostsType> = React.memo(props => {

        const handleAddPost = (values: AddPostFormType) => {
            console.log(values)
            props.addPost(values.newPostBody)
        }
        console.log("My posts RENDER", props)

        return (
            <div className={classes.postsBlock}>
                <h3>My Post</h3>
                <AddPostReduxForm onSubmit={handleAddPost}/>

                <div className={classes.posts}>
                    {props.posts.map((post) => {
                        return <Post
                            key={post.id}
                            id={post.id}
                            message={post.message}
                            likesCount={post.likesCount}
                        />
                    })}
                </div>
            </div>
        )
    }
)

export type AddPostFormType = {
    newPostBody: string
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                validate={[required, maxLength10]}
                name={"newPostBody"}
                component={TextArea}
                placeholder={"Enter post body"}
            />
            <button>New post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm<AddPostFormType>({
    form: "addPostForm"
})(AddPostForm)

export default React.memo(MyPosts)