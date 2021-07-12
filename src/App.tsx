import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initiliazeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


const App: React.FC = (props: any) => {
    const dispatch = useDispatch()
    const initiliazed = useSelector((state : AppStateType) => state.app.initialized)

    useEffect(() => {
        dispatch(initiliazeApp())
    }, [])

    if (!initiliazed){
        return <Preloader/>
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}/>
                <Route
                    path='/profile/:userId?'
                    render={() => <ProfileContainer
                    />}/>
                <Route
                    path='/users'
                    render={() => <UsersContainer/>}
                />
                <Route
                    path='/login'
                    render={() => <Login/>}
                />
            </div>
        </div>

    );
}


type MessageType = {
    message: string
}

function HelloMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

const ByeMessage: React.FC<MessageType> = (props: MessageType) => {
    return <h1>{props.message}</h1>
}

export default App;


