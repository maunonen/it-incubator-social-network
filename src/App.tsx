import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {showName} from "./js/lesson1";
import {strict} from "assert";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


/*const showName1  = showName( str )*/

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>
        /*        <BrowserRouter>
                    <Route path={"/hello"} render={() => <HelloMessage message={"Hello friends"}/>} />
                    <Route path={"/bye"} component={ByeMessage} />
                    <Route path={"/bye"} render={() => <ByeMessage message={"Bye Bye"}/>} />
                </BrowserRouter>*/
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


