import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello, how are you, mate?', likesCount: '345'},
                {id: 2, message: 'I am ok, how r u urself?', likesCount: '334'}
            ],
            newPostText: ""
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
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state)
    }
};

window.store = store;
export default store;