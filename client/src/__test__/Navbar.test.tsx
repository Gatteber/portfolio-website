import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
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

  it('has a light/dark button', () => {
    render(<Navbar />);
    const themeSwitchEl = screen.getByRole<HTMLInputElement>('button', {
      name: /color-theme/i,
    });
    expect(themeSwitchEl).toBeInTheDocument();
  });

  test('the light button renders first', () => {
    render(<Navbar />);
    const svgEl = screen.getByTitle('sun');
    expect(svgEl).toBeInTheDocument();
  });

  test('the dark button changes upon user click', async () => {
    render(<Navbar />);
    const themeSwitchEl = screen.getByRole<HTMLInputElement>('button', {
      name: /color-theme/i,
    });
    await userEvent.click(themeSwitchEl);
    const svgEl = screen.getByTitle('moon');
    expect(svgEl).toBeInTheDocument();
  });
});
