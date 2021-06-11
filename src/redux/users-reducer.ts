import {type} from "os";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location : LocationType
}

export type LocationType = {
    city: string
    country: string
}

let initialProfileState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://picsum.photos/200/300',
            followed: false,
            fullName: 'Alex',
            status: 'online',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            },

        },
        {
            id: 2,
            photoUrl: 'https://picsum.photos/200/300',
            followed: true,
            fullName: 'Jenny',
            status: 'offline',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
        },
    ] as Array<UserType>,
    newPostText: 'it-kamasutra'
}

export type InitialUsersStateType = typeof initialProfileState
export type CombinedUsersActionType = FollowACType | UnfollowACType | SetUserACType


export const usersReducer = (state = initialProfileState, action: CombinedUsersActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}

export type FollowACType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUserACType = {
    type: typeof SET_USERS
    users : Array<UserType>
}


export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: any) => ({type: SET_USERS, users} as const)

// export const addPostActionCreator = () => ({type: ADD_POST})
// export const updateNewPostTextActionCreator = (text: any) => (
//     {type: UPDATE_NEW_POST_TEXT, newPost: text})

