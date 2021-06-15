const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large : string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe : string
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

export type CombinedProfileActionCreatorType = AddPostActionCreatorType
    | UpdateNewPostTextActionCreatorType
    | SetUserProfileType

export const profileReducer = (state = initialProfileState, action: CombinedProfileActionCreatorType) : InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
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
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
            default:
            return state
    }

}
type AddPostActionCreatorType = {
    type : typeof ADD_POST
    /*newPostText : string*/
}

type UpdateNewPostTextActionCreatorType = {
    type : typeof UPDATE_NEW_POST_TEXT
    newPostText : string
}
type SetUserProfileType = {
    type : typeof SET_USER_PROFILE,
    profile : ProfileType
}

export const addPostActionCreator = ( ) : AddPostActionCreatorType => ({type: ADD_POST })
export const updateNewPostTextActionCreator = (newPostText: string) : UpdateNewPostTextActionCreatorType => (
    {type: UPDATE_NEW_POST_TEXT, newPostText })
export const setUserProfile = ( profile : ProfileType) : SetUserProfileType => ({ type : SET_USER_PROFILE, profile : profile})
