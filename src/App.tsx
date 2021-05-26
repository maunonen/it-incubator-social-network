import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


/*const App: React.FC<RootStateType> = (props) => {*/
const App: React.FC = (props) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer
                            /*dialogs={props.dialogsPage.dialogs}*/
                            /*messages={props.dialogsPage.messages}*/
                        />}/>
                    <Route
                        path='/profile'
                        render={() => <Profile
                            /*posts={props.profilePage.posts}*/
                            /*addPost={props.profilePage.addPost}*/
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


