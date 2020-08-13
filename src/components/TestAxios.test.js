import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import axiosMock from 'axios'
import TestAxios from './TestAxios'
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
jest.mock('axios');

it('should display loading text', () => {
    const { getByTestId } = render(<TestAxios/>);

    expect(getByTestId('loading')).toHaveTextContent('Loading...');
});

it('should load and display the data', async() => {
    const url = '/greeting';
    const { getByTestId } = render(<TestAxios url={url}/>);

    axiosMock.get.mockResolvedValueOnce({
        data: {greeting: 'hello there'},
    })

    user.click(getByTestId('fetch-data'));

    const greetingData = await waitForElement( () => getByTestId('show-data'));

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url)
    expect(greetingData).toHaveTextContent('hello there')
});