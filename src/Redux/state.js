import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello, how are you, mate?', likesCount: '345'},
            {id: 2, message: 'I am ok, how r u urself?', likesCount: '334'}
        ]
    },
    dialogsPage: {
        dialogItems: [
            {name: 'Nariman', id: '1'},
            {name: 'Zhandos', id: '2'},
            {name: 'Yerlan', id: '3'},
            {name: 'Aidos', id: '4'}
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'Whats up?'},
            {id: '3', message: 'Where are u mate?'},
            {id: '4', message: 'Nice to see ya here!'}
        ]
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

export let addNewPost = (newPostText) => {
    let newPost = {
        id: 3,
        message: newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}

export default state;