const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


type PostType = {
    id: number
    message: string
    likesCount: number
}

type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string | null
    large : string | null
}

type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos : PhotosType
}

let initialProfileState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 12}] as Array<PostType>,
    profile : null as ProfileType | null,
    newPostText: "",
    status : ""
}

export type InitialStateType = typeof initialProfileState

export type CombinedProfileActionCreatorType = AddPostActionCreatorType | UpdateNewPostTextActionCreatorType

export const profileReducer = (state = initialProfileState, action: CombinedProfileActionCreatorType) : InitialStateType => {
    console.log("Profile reducer", action)
    switch (action.type) {
        case ADD_POST:
            console.log('ADD POST')
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            console.log(state)
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText : action.newPostText
            }
        default:
            return state
    }

}
type AddPostActionCreatorType = {
    type : typeof ADD_POST
    newPostText : string
}

type UpdateNewPostTextActionCreatorType = {
    type : typeof UPDATE_NEW_POST_TEXT
    newPostText : string
}

export const addPostActionCreator = ( newPostText : string ) : AddPostActionCreatorType => ({type: ADD_POST, newPostText })
export const updateNewPostTextActionCreator = (newPostText: string) : UpdateNewPostTextActionCreatorType => (
    {type: UPDATE_NEW_POST_TEXT, newPostText })

