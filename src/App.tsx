import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

/*const App: React.FC<RootStateType> = (props) => {*/
const App: React.FC = (props) => {

    return (
        <BrowserRouter>
            <Provider store={store}>
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
                    </div>
                </div>
            </Provider>
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


