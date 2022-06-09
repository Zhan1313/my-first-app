import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

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
test('length of postsData should be decreased', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.postsData.length).toBe(1);
});
test('length of postsData should not be decreased if postId is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.postsData.length).toBe(2);
});
