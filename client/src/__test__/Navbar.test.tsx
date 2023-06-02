import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';
// import mediaQuery from 'css-mediaquery';

// const createMatchMedia = (width: number) => (query: string) => ({
//   matches: mediaQuery.match(query, {width}),
//   media: '',
//   onchange: () => undefined,
//   addListener: () => undefined,
//   removeListener: () => undefined,
//   addEventListener: () => undefined,
//   removeEventListener: () => undefined,
//   dispatchEvent: () => true,
// });

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

  test('mode setting persists through screen resize', async () => {
    render(<Navbar />);
    const themeSwitchEl = screen.getByRole<HTMLInputElement>('button', {
      name: /color-theme/i,
    });
    //theme switch persists, so we need to click twice to ensure it's dark theme.
    await userEvent.click(themeSwitchEl);
    await userEvent.click(themeSwitchEl);
    //resize, re-render window
    window.innerWidth = 500;
    render(<Navbar />);
    const svgEl = screen.getAllByTitle('moon')[0] as HTMLOrSVGElement;
    console.log(svgEl);
    expect(svgEl).toBeInTheDocument();
  });

  test('the hamburger menu renders at small screen size', () => {
    //simulate window inner width at mobile size. no media query?
    window.innerWidth = 500;
    render(<Navbar />);
    const hamburgerEl = screen.getByRole('button', {
      name: /hamburger-menu/i,
    });
    expect(hamburgerEl).toBeInTheDocument();
  });
});
