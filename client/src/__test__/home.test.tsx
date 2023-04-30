import {render, screen} from '@testing-library/react';
import Home from '../pages/Home';

describe('I setup the test correctly', () => {
  it('renders', () => {
    const mockData = {
      name: 'Hello World',
    };
    render(<Home data={mockData} />);
    screen.debug();
  });
});
