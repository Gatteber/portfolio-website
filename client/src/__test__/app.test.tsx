import {render, screen} from '@testing-library/react';
import Home from '../pages/Home';

describe('I setup the test correctly', () => {
  it('renders the homepage', () => {
    const data = {
      name: 'hello world',
    };
    render(<Home data={data} />);
    screen.debug();
  });
});
