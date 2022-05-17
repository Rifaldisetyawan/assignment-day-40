import { render, screen, act } from '@testing-library/react';
import apiClient from "./http-common"
import GetSection from '../src/components/GetSection/view';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./http-common')

const testText = {
    id:'1',
    name:'222'
  }
const errorText = "error";
const mockResponse = {
    data: {
        data:testText
    }
}

test('renders react axios - get ', async () => {
    await act(async () => {
        await apiClient.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
        render(<GetSection />);
    });
    const textElement = await screen.getByText(testText);
    expect(textElement).toBe(3);
});


