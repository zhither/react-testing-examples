import React from 'react';
import { render, cleanup} from '@testing-library/react';
import user from '@testing-library/user-event';
import TestEvents from './TestEvents';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

it('should increment counter', () => {
    const { getByTestId } = render(<TestEvents/>);

    user.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1');
});

it('should decrement counter', () => {
    const { getByTestId } = render(<TestEvents/>);

    user.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('-1');
});