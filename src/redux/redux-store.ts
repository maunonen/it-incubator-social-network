import {combineReducers, createStore} from "redux";
import {strict} from "assert";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebarReducer,
    usersPage : usersReducer
})


export type AppStateType = typeof rootReducer

const  store  = createStore(rootReducer)

export default store

