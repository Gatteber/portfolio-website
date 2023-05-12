import {render, screen} from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('I setup the test correctly', () => {
  it('renders a basic navbar', () => {
    render(<Navbar />);
    screen.debug();
  });

  it('has a Home, Projects, About, and Contact list', () => {
    render(<Navbar />);
    const navListHomeEl = screen
      .getAllByRole('listitem')
      .find((listitem) => listitem.textContent === 'Home');
    const navListProjectEl = screen
      .getAllByRole('listitem')
      .find((listitem) => listitem.textContent === 'Projects');
    const navListAboutEl = screen
      .getAllByRole('listitem')
      .find((listitem) => listitem.textContent === 'About');
    const navListContactEl = screen
      .getAllByRole('listitem')
      .find((listitem) => listitem.textContent === 'Contact');
    expect(navListHomeEl).toBeInTheDocument();
    expect(navListProjectEl).toBeInTheDocument();
    expect(navListAboutEl).toBeInTheDocument();
    expect(navListContactEl).toBeInTheDocument();
  });

  it('has a light/dark button that can change colormodes', () => {
    render(<Navbar />);
    const themeSwitchEl = screen.getByRole<HTMLInputElement>('button', {
      name: /color-theme/i,
    });
    expect(themeSwitchEl).toBeInTheDocument();
  });
});
