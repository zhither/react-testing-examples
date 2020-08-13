import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';;
import TestAsync from './TestAsync';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

it('should increment counter after 0.5s', async() => {
    const { getByTestId, getByText } = render(<TestAsync/>);

    user.click(getByTestId('button-up'));

    const counter = await waitForElement( () => getByText('1'));
    expect(counter).toHaveTextContent('1');
});