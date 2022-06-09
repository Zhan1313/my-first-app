const SEND_DIALOGS_MESSAGE = 'samurai-network/dialogs/SEND_DIALOGS_MESSAGE';

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
    ]
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
                dialogMessages: [...state.dialogMessages, newDialogMessage]
            };
        default:
            return state;
    }
}

export const sendDialogsMessageActionCreator = (formData) => ({type: SEND_DIALOGS_MESSAGE, formData});

export default dialogsReducer;