type MessageType = {
    id : number
    message : string
}

type DialogType = {
    id : number
    name : string
}
type PostType = {
    id : number
    message : string
    likesCount : number
}
type ProfilePageType = {
    posts : Array<PostType>
}

type DialogPageType = {
    dialogs : Array<DialogType>
    messages : Array<MessageType>
}

type SideBarType = {

}

type RootStateType = {
    profilePage : ProfilePageType
    dialogsPage : DialogPageType
    sidebar : SideBarType
}

let state: RootStateType;
state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello How are you', likesCount: 12},
            {id: 2, message: 'This is my first post', likesCount: 11},
            {id: 3, message: 'Bla bla ', likesCount: 11},
            {id: 4, message: 'Dada ', likesCount: 10}
        ]
    },
    dialogsPage: {
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
    sidebar: {}
};

export default state