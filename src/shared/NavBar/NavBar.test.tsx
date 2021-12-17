import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

jest.mock('react-router-dom');

describe("Test NavBar",()=>{
    beforeEach(()=>{
        const mockRouterDom = require('react-router-dom');
        mockRouterDom.Link = jest.fn((props) => { return <div>{props.to}</div> });
        render(<NavBar/>)
    })
    describe("When user clicks on home",()=>{
        // beforeEach(async()=>{
        //     await (await screen.findByText("Home")).click()
        // })
        it("Should redirect to /",()=>{
            expect(screen.getByText("/")).toBeInTheDocument();
        })
    })
})