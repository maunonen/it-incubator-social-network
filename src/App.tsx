import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {RootStateType} from "./redux/state";

const App: React.FC<RootStateType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => <Dialogs
                            dialogs={props.dialogsPage.dialogs}
                            messages={props.dialogsPage.messages}
                        />}/>
                    <Route
                        path='/profile'
                        render={() => <Profile
                            posts={props.profilePage.posts}
                            addPost={props.profilePage.addPost}
                        />}/>
                </div>
            </div>
        </BrowserRouter>
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


