
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialProfileState = {
    users: [
        {
            id: 1,
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
            followed: true,
            fullName: 'Jenny',
            status: 'offline',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
        },
    ],
    newPostText: 'it-kamasutra'
}


export const usersReducer = (state = initialProfileState, action: any) => {
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
                ...state, users: [...state.users, ...action.users ]
            }
        default:
            return state
    }

}

export const followAC = (userId: any) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any) => ({type: SET_USERS, users})

// export const addPostActionCreator = () => ({type: ADD_POST})
// export const updateNewPostTextActionCreator = (text: any) => (
//     {type: UPDATE_NEW_POST_TEXT, newPost: text})

