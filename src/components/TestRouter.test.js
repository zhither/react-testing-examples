import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent, getByText } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import TestRouter from './TestRouter'
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const renderWithRouter = (component) => {
    const history = createMemoryHistory();
    return {
        ...render (
            <Router history={history}>
                {component}
            </Router>
        )
    }
}

it('should render the home page', () => {
    const { container, getByTestId } = renderWithRouter(<TestRouter />);
    const navbar = getByTestId('navbar');
    const link = getByTestId('home-link');

    expect(container.innerHTML).toMatch(/Home page/i);
    expect(navbar).toContainElement(link)
});

it('should navigate to the about page', () => {
    const { container, getByTestId } = renderWithRouter(<TestRouter />);
    user.click(getByTestId('about-link'));

    expect(container.innerHTML).toMatch(/About page/i);
});

it('should navigate to the contact page with the params', ()=> {
    const { container, getByTestId } = renderWithRouter(<TestRouter />) 
     
    user.click(getByTestId('contact-link'))
     
    expect(container.innerHTML).toMatch('John Doe')
  })