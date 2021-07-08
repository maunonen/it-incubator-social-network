import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


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
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactType
    photos: PhotosType
}

let initialProfileState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 12}] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "" as string
}

export type InitialStateType = typeof initialProfileState

export type CombinedProfileActionCreatorType = AddPostActionCreatorType
    | SetUserProfileType | SetStatus

export const profileReducer = (state = initialProfileState, action: CombinedProfileActionCreatorType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }

}
type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText : string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

type SetStatus = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): SetStatus => ({type: SET_STATUS, status})

export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getUserStatus(userId)
        //@ts-ignore
        .then(data => {
            // console.log('Set status', data.data)
            dispatch(setStatus(data.data))
        })
}
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        //@ts-ignore
        .then(data => {
            // console.log('Status updated to: ', status)
            // console.log(data)
            if (data.data.resultCode === 0) {
                // console.log('Status updated to: ', status)
                dispatch(setStatus(status))
            }
        })
}

export const addPostActionCreator = (newPostText : string): AddPostActionCreatorType => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile: profile})

export const getUserProfile = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId)
            //@ts-ignore
            .then(data => {
                // console.log(data)
                if (data) {
                    // console.log(data)
                    dispatch(setUserProfile(data))
                }
            });
    }
}

export const getMyProfile = () => {
    return (dispatch: any) => {
        usersAPI.authMe()
            //@ts-ignore
            .then(data => {
                // console.log(data)
                if (data.resultCode === 0) {
                    return data.data.id
                    // profileAPI.getProfile(data.)
                }
            })
            // @ts-ignore
            .then( id => {
                // console.log(id)
                return profileAPI.getProfile(id)
            })
            //@ts-ignore
            .then( data => {
                console.log(data)
                if (data ){
                    dispatch(setUserProfile(data))
                }
            })
            //@ts-ignore
            .catch( err => {
                console.log(err)
            })
    }
}