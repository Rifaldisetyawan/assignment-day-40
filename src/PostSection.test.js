import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import PostSection from "../src/components/PostSection/view"
import '@testing-library/jest-dom/extend-expect';

test('Render Text Input', async () => {
    render(<PostSection />);
    const testText = "halo"
    const testText2 = "world"


    const titleInput = screen.getByPlaceholderText('Title')
    userEvent.type(titleInput, testText)
    const titleElement = await screen.findByText("Title: "+ testText)
    expect(titleElement).toBeInTheDocument()   

    
    const descInput = screen.getByPlaceholderText('Description')
    userEvent.type(descInput, testText2)
    const desElement = await screen.findByText("Description: "+testText2)
    expect(desElement).toBeInTheDocument()  
});
