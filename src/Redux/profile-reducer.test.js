import profileReducer, {addPostActionCreator} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

test('length of postsData should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('It-Kamasutra');
    let state = {
        postsData: [
            {id: 1, message: 'Hello, how are you, mate?', likesCount: '345'},
            {id: 2, message: 'I am ok, how r u urself?', likesCount: '334'}
        ]
    };
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.postsData.length).toBe(3);
});

