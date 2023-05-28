import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../pages/Contact';

describe('Contact form', () => {
  it('renders', () => {
    render(<Contact />);
    const contactForm = screen.getByText("Let's get in touch.");
    expect(contactForm).toBeInTheDocument();
    const firstNameField = screen.getByRole('textbox', {name: 'firstName'});
    expect(firstNameField).toBeInTheDocument();
    const lastNameField = screen.getByRole('textbox', {name: 'lastName'});
    expect(lastNameField).toBeInTheDocument();
    const emailField = screen.getByRole('textbox', {name: 'email'});
    expect(emailField).toBeInTheDocument();
    const subjectField = screen.getByRole('textbox', {name: 'subject'});
    expect(subjectField).toBeInTheDocument();
    const messageField = screen.getByRole('textbox', {name: 'message'});
    expect(messageField).toBeInTheDocument();
  });

  it('allows change for first name field', async () => {
    render(<Contact />);
    const firstNameField = screen.getByRole('textbox', {name: 'firstName'});
    await userEvent.type(firstNameField, 'Tom');
    expect(screen.getByDisplayValue('Tom'));
  });

  it('allows change for last name field', async () => {
    render(<Contact />);
    const lastNameField = screen.getByRole('textbox', {name: 'lastName'});
    await userEvent.type(lastNameField, 'Sawyer');
    expect(screen.getByDisplayValue('Sawyer'));
  });

  it('allows change for email name field', async () => {
    render(<Contact />);
    const emailField = screen.getByRole('textbox', {name: 'email'});
    await userEvent.type(emailField, 'TomSaywer@email.com');
    expect(screen.getByDisplayValue('TomSaywer@email.com'));
  });

  it('allows change for subject name field', async () => {
    render(<Contact />);
    const subjectField = screen.getByRole('textbox', {name: 'subject'});
    await userEvent.type(subjectField, 'Test');
    expect(screen.getByDisplayValue('Test'));
  });

  it('allows change for message field', async () => {
    render(<Contact />);
    const messageField = screen.getByRole('textbox', {name: 'message'});
    await userEvent.type(messageField, 'Test');
    expect(screen.getByDisplayValue('Test'));
  });

  //TODO: write unit test for form submission
  it('submits if all data is correct');
});
