const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_DIALOGS_MESSAGE = 'SEND_DIALOGS_MESSAGE';
const UPDATE_NEW_DIALOGS_MESSAGE_TEXT = 'UPDATE_NEW_DIALOGS_MESSAGE_TEXT';

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

    _addNewDialogsMessage() {
        let newDialogMessage = {
            id: 5,
            message: this._state.dialogsPage.newDialogsMessageText
        };
        this._state.dialogsPage.dialogMessages.push(newDialogMessage);
        this._state.dialogsPage.newDialogsMessageText = '';
        this._callSubscriber(this._state)
    },
    _updateNewDialogMessageText(messageText) {
        this._state.dialogsPage.newDialogsMessageText = messageText;
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_DIALOGS_MESSAGE) {
            this._addNewDialogsMessage();
        } else if (action.type === UPDATE_NEW_DIALOGS_MESSAGE_TEXT) {
            this._updateNewDialogMessageText(action.newMessageText);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText :text});

export const sendDialogsMessageActionCreator = () => ({type: SEND_DIALOGS_MESSAGE});
export const updateNewDialogMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_DIALOGS_MESSAGE_TEXT, newMessageText :text});

window.store = store;
export default store;