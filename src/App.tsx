import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App: React.FC = (props: any) => {
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


