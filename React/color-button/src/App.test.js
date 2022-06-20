import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test("testing button initial color and text", () => {
  render(<App/>);
  const btn = screen.getByRole('button', {name: 'change color to blue'});
  expect(btn).toHaveStyle({backgroundColor: 'red'})
})

test("button color changes to blue when button clicked", () => {
  render(<App/>)
  const btn = screen.getByRole('button', {name: 'change color to blue'});
  expect(btn).toHaveStyle({backgroundColor: 'red'});
  fireEvent.click(btn)
  expect(btn).toHaveStyle({backgroundColor: 'blue'})
  expect(btn.textContent).toBe('change color to red')
})

test("initial condition", () => {
  render(<App/>)
  const btn = screen.getByRole('button');
  expect(btn).toBeEnabled()
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})


test("disable button on check of checkbox", () => {
  render(<App />)
  const chckbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');
  fireEvent.click(chckbox);
  expect(button).toBeDisabled();

  fireEvent.click(chckbox);
  expect(button).toBeEnabled()
})

test("disable button have grey color", () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'disabled button'});
  
  expect(checkbox)
})