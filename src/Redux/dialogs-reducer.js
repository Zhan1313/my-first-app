const SEND_DIALOGS_MESSAGE = 'SEND_DIALOGS_MESSAGE';
const UPDATE_NEW_DIALOGS_MESSAGE_TEXT = 'UPDATE_NEW_DIALOGS_MESSAGE_TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_DIALOGS_MESSAGE:
            let newDialogMessage = {
                id: 5,
                message: action.formData.messageText
            };
            return {
                ...state,
                dialogMessages: [...state.dialogMessages, newDialogMessage],
                newDialogsMessageText: ''
            };
        case UPDATE_NEW_DIALOGS_MESSAGE_TEXT:
            return {
                ...state,
                newDialogsMessageText: action.newMessageText
            };
        default:
            return state;
    }
}

export const sendDialogsMessageActionCreator = (formData) => ({type: SEND_DIALOGS_MESSAGE, formData});
export const updateNewDialogMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_DIALOGS_MESSAGE_TEXT, newMessageText :text});

export default dialogsReducer;