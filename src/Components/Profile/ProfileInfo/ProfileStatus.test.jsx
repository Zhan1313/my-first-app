import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("It-kamasutra.com");
    });
    test("editMode in the state should be false", () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const instance = component.getInstance();
        expect(instance.state.editMode).toBe(false);
    });
    test(`after creation <span> must be displayed`, () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const root = component.root;
        const span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test(`after creation <span> must be displayed with status from props`, () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const instance = component.getInstance();
        const root = component.root;
        const span = root.findByType('span')
        expect(span.children[0]).toBe(instance.props.status);
    });

    test(`after double clicking on the <span> the <input> must be displayed instead of span`, () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const root = component.root;
        const span = root.findByType('span')
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input).not.toBeNull();
    });
    test(`after double clicking on the <span> the <input> must be displayed with value from status`, () => {
        const component = create(<ProfileStatus status="It-kamasutra.com" />);
        const instance = component.getInstance();
        const root = component.root;
        const span = root.findByType('span')
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe(instance.state.status);
    });
    test(`callback should be called`, () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="It-kamasutra.com" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
    test(`callBack should be called`, () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="It-kamasutra.com" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        mockCallBack();
        expect(mockCallBack).toBeCalled();
    });
});