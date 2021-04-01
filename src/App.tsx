import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from "react-router-dom";
import {showName} from "./js/lesson1";
import {strict} from "assert";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


/*const showName1  = showName( str )*/

const App = () => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Profile/>

            </div>
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


