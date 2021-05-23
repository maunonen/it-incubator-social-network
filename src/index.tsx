import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootState, {addPost} from "./redux/state";
import store  from './redux/redux-store';

/*let dialogs:Array<DialogItemType> = [
    { id : 1,name : 'Alex'},
    { id : 2,name : 'Jenny'},
    { id : 3,name : 'Jari'},
    { id : 4,name : 'Emil'},
    { id : 5,name : 'Miko'},
]

let messages:Array<MessageType> = [
    { id : 1, message : 'Hello'},
    { id : 2, message : 'How are you'},
    { id : 3, message : 'I am fine'},
    { id : 4, message : 'See you'},
    { id : 5, message : 'Bye bye'},
]

let posts: Array<PostType> = [
    { id : 1, message : 'Some post number one', likesCount : 10},
    { id : 2, message : 'yet another post number one' , likesCount : 20},
    { id : 3, message : 'Post number two' , likesCount : 30},
    { id : 4, message : 'Some post number three' , likesCount : 40}
]*/

addPost("Hello");

ReactDOM.render(
  <React.StrictMode>
    <App
        profilePage={RootState.profilePage}
        dialogsPage={RootState.dialogsPage}
    ></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
