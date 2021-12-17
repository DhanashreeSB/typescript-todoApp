import React from 'react';
import { render, screen } from '@testing-library/react';
// import * as todoConstants from '../../Constants/todoConstants';
import Schedule from './Schedule';
import { StoreProvider } from '../StoreProvider/StoreProvider';
// import useStores from '../../hooks/useStores';
import userEvent from '@testing-library/user-event'

jest.mock('react-router-dom');
// jest.mock("./Todo")

describe("Test Home component", () => {
    test("snapshot testing", () => {
        let snapshot = render(<StoreProvider><Schedule /></StoreProvider>);
        expect(snapshot).toMatchSnapshot();
    })
    describe("When user clicks on Go to home", () => {
        beforeEach(async () => {
            const mockRouterDom = require('react-router-dom');
            mockRouterDom.Redirect = jest.fn((props) => { return <div>{props.to}</div> });
            render(<StoreProvider><Schedule /></StoreProvider>);
            await (await screen.findByText("Go to home")).click();
        })
        it("Should redirect to /", () => {
            expect(screen.getByText("/")).toBeInTheDocument();
        })
    })
    describe("Check for initial todos",()=>{
        beforeEach(()=>{
            render(<StoreProvider><Schedule /></StoreProvider>);
        })
        it("should show initial todos on screen",()=>{
            expect(screen.getByText(/Meeting at 3PM/i)).toBeInTheDocument();
            expect(screen.getByText(/Presentation at 1PM/i)).toBeInTheDocument();
        })
        describe("Given user clicks on remove button",()=>{
            beforeEach(()=>{
                let node = screen.getByTestId("todo-0");
                node.click();
            })
            it("should remove one todo from screen",()=>{
                let todo = screen.queryByText(/Presentation at 1PM/i)
                expect(todo).toBeNull();
            })
        })
        describe("Given user enters new work item and clicks on add button",()=>{
            beforeEach(()=>{
                let node = screen.getByTestId("add-todo");
                userEvent.type(node, "New work todo");
                let addTodo = screen.getByText("Add Task");
                addTodo.click();
            })
            it("should show newly added todo on screen",()=>{
                expect(screen.getByText(/New work todo/i)).toBeInTheDocument();
            })
        })
    })
})