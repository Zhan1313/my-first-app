import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hello, how are you, mate?', likesCount: '345'},
        {id: 2, message: 'I am ok, how r u urself?', likesCount: '334'}
    ]
};
test('length of postsData should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('It-Kamasutra');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});
test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('It-Kamasutra');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.postsData[2].message).toBe('It-Kamasutra');
});

