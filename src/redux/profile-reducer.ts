const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialProfileState = {
    posts : [
        {id :  1, message : 'Hello', likesCount : 12}],
    newPostText : 'it-kamasutra'
}


export const profileReducer = (state = initialProfileState , action : any ) => {
    switch (action.type) {
        case action.type === ADD_POST:
            let newPost = {
                id : 5,
                message : state.newPostText,
                likesCount : 0
            }
            return state
        case action.type === UPDATE_NEW_POST_TEXT:
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => ({ type :  ADD_POST })
export const updateNewPostTextActionCreator = (text : any ) => (
    { type :  UPDATE_NEW_POST_TEXT, newPost: text })

