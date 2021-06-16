import {type} from "os";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type UserType = {
    id: number
    name: string
    // Delete in case it not used anymore
    photoUrl: string | null
    photos?: UserPhotosType
    followed: boolean
    fullName: string
    status: string | null
    location?: LocationType
}

export type UserPhotosType = {
    small: string
    large: string
}

export type LocationType = {
    city: string
    country: string
}

let initialProfileState = {
    users: [
        /*{
            id: 1,
            photoUrl: 'https://picsum.photos/200/300',
            followed: false,
            fullName: 'Alex',
            status: 'online',
            photos : {
                small : "https://picsum.photos/200/202",
                large : "https://picsum.photos/200/203",
            },
            location: {
                city: 'Minsk',
                country: 'Belarus'
            },

        },*/
        /*{
            id: 2,
            photoUrl: 'https://picsum.photos/200/300',
            followed: true,
            fullName: 'Jenny',
            status: 'offline',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
        },*/
    ] as Array<UserType>,
    newPostText: 'it-kamasutra',
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress : [] as Array<number>
}

export type InitialUsersStateType = typeof initialProfileState
export type CombinedUsersActionType = FollowType
    | UnfollowType
    | SetUserType
    | SetCurrentPageType
    | SetTotalUserCountType
    | SetToggleIsFetchingType
    | SetToggleIsFollowingProgressType


export const usersReducer = (state = initialProfileState, action: CombinedUsersActionType) : InitialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
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
                ...state, users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ?  [...state.followingInProgress, action.userId]
                    :  state.followingInProgress.filter(id => id !== action.userId )
            }
        default:
            return state
    }

}

export type FollowType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowType = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUserType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type SetTotalUserCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

export type SetToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export type SetToggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId : number
}

export const toggleFollowingProgress = ( isFetching : boolean, userId : number) : SetToggleIsFollowingProgressType => ({ type : TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const)
export const follow = (userId: number): FollowType => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number): UnfollowType => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>): SetUserType => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUserCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)

export const toggleIsFetching = (isFetching: boolean): SetToggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)

// export const addPostActionCreator = () => ({type: ADD_POST})
// export const updateNewPostTextActionCreator = (text: any) => (
//     {type: UPDATE_NEW_POST_TEXT, newPost: text})

