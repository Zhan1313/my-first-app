let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello, how are you, mate?', likesCount: '345'},
            {id: 2, message: 'I am ok, how r u urself?', likesCount: '334'}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogItems: [
            {name: 'Nariman', id: '1'},
            {name: 'Zhandos', id: '2'},
            {name: 'Yerlan', id: '3'},
            {name: 'Aidos', id: '4'}
        ],
        dialogMessages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Whats up?'},
            {id: 3, message: 'Where are u mate?'},
            {id: 4, message: 'Nice to see ya here!'}
        ],
        newDialogsMessageText: ''
    },
    sideBar: {
        friendsData: [
            {id: 1, name: 'Abylai', age: 36},
            {id: 2, name: 'Roman', age: 36},
            {id: 3, name: 'Askar', age: 35},
            {id: 4, name: 'Rustem', age: 35},
        ]
    }
}

window.state = state;

export const addNewPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}
export const addNewDialogsMessage = () => {
    let newDialogMessage = {
        id: 5,
        message: state.dialogsPage.newDialogsMessageText
    };
    state.dialogsPage.dialogMessages.push(newDialogMessage);
    state.dialogsPage.newDialogsMessageText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}
export const updateNewDialogMessageText = (messageText) => {
    state.dialogsPage.newDialogsMessageText = messageText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;