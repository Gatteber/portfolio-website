import {render, screen} from '@testing-library/react';
import Projects from '../pages/Projects';

const mockProjectData = [
  {
    projectID: 1,
    projectName: 'Project 1',
    gitLink: '#',
    liveLink: '#',
    image: '#',
    description: 'lorem ipsum color dolor set here is the test description.',
  },
  {
    projectID: 2,
    projectName: 'Project 2',
    gitLink: '#',
    liveLink: '#',
    image: '#',
    description: 'lorem ipsum color dolor set here is the test description.',
  },
];

describe('Projects component and its fetch request', () => {
  it('renders the projects page', () => {
    render(<Projects projectList={mockProjectData} />);
    const h3El = screen.getByRole('heading');
    expect(h3El).toBeInTheDocument();
  });

  it('fetches the mock data from the backend api', () => {
    render(<Projects projectList={mockProjectData} />);
    const projectEl = screen.getByText(/Project 1/);
    expect(projectEl).toBeInTheDocument();
  });
});
