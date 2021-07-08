import {applyMiddleware, combineReducers, createStore} from "redux";
import {strict} from "assert";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form : formReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

