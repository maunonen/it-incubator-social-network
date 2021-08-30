import {addPostActionCreator, deletePostActionCreator, PostType, profileReducer, ProfileType} from "./profile-reducer";

let initialState = {
    posts: [{id: 1, message: 'Hello', likesCount: 12}],
    profile:  null,
    status: ""
}

it('Post length should be added', () => {
    let action = addPostActionCreator("Test adding new post")
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(2)
    expect(newState.posts[1].message).toBe("Test adding new post")
})

it('Post array length reduce after removing post', () => {
    let action = deletePostActionCreator(1)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(0)
})

it('Post length doesnät change if id is invalid ', () => {
    let action = deletePostActionCreator(89789)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(1)
})

