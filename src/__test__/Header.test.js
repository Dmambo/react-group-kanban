import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../components/Header/Header';

describe('Test Header Component', () => {
  it('should render Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
    expect(screen.getByText('Rocket')).toBeInTheDocument();
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
});
