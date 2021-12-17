import React from 'react';
import { render, screen } from '@testing-library/react';
import * as todoConstants from '../../Constants/todoConstants';
import Home from './Home';

describe("Test Home component",()=>{
    test("snapshot testing",()=>{
        let snapshot = render(<Home/>);
        expect(snapshot).toMatchSnapshot();
    })
    describe("Test for text in UI",()=>{
        beforeEach(()=>{
            render(<Home/>)
        })
        it("should display Plan Your Work on screen",()=>{
            expect(screen.getByText(todoConstants.planWork)).toBeInTheDocument();
        })
        it("should display Be Efficient on screen",()=>{
            expect(screen.getByText(todoConstants.beEfficient)).toBeInTheDocument();
        })
    })
})