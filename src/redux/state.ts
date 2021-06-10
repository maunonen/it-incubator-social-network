import Dialogs from "../components/Dialogs/Dialogs";
import React from "react";

export const addPost  = ( post : string ) : void => {

    let newPost = {
        id : 5,
        message : post,
        likesCount : 0
    }
    console.log('ADD post from STATE JS', newPost);
    RootState.profilePage.posts.push( newPost );
}


export type MessageType = {
    id : number
    message : string
}

export type DialogType = {
    id : number
    name : string
}
export type PostType = {
    id : number
    message : string
    likesCount : number
}

export type ProfilePageType = {
    newPostText : string
    posts : Array<PostType>
    addPost : (str : string ) => void
    updateNewPostText : (str : string ) => void
}

export type DialogPageType = {
    updateNewMessageBody : (str : string ) => void
    sendMessage : (body: string) => void
    dialogsPage : any
}

export type SideBarType = {

}

export type RootStateType = {
    profilePage : ProfilePageType
    dialogsPage : DialogPageType

    //sidebar : SideBarType
}

let RootState: RootStateType;
// @ts-ignore
RootState = {
    // @ts-ignore
    profilePage: {
        posts: [
            {id: 1, message: 'Hello How are you', likesCount: 12},
            {id: 2, message: 'This is my first post', likesCount: 11},
            {id: 3, message: 'Bla bla ', likesCount: 11},
            {id: 4, message: 'Dada ', likesCount: 10}
        ],
        addPost : addPost
    },
    dialogsPage: {
        // @ts-ignore
        dialogs: [
            {id: 1, name: "Alex"},
            {id: 2, name: "Jane"},
            {id: 3, name: "Matti"},
            {id: 4, name: "Jussi"},
            {id: 5, name: "Ann"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo"},
        ]
    },

    //sidebar: {}
};



export default RootState