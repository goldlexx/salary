import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import EmployeesAddForm from './employees-add-form';

test('rejects incomplete or too-short employee data', () => {
  const onAdd = jest.fn();
  render(<EmployeesAddForm onAdd={onAdd} />);

  fireEvent.change(screen.getByRole('textbox', { name: 'Employee name' }), {
    target: { value: 'Al' },
  });
  fireEvent.submit(screen.getByRole('textbox', { name: 'Employee name' }).closest('form'));

  expect(onAdd).not.toHaveBeenCalled();
});

test('adds a valid employee and clears the form', () => {
  const onAdd = jest.fn();
  render(<EmployeesAddForm onAdd={onAdd} />);
  const name = screen.getByRole('textbox', { name: 'Employee name' });
  const salary = screen.getByRole('spinbutton', { name: 'Employee salary' });

  fireEvent.change(name, { target: { value: '  Alex Morgan  ' } });
  fireEvent.change(salary, { target: { value: '4200' } });
  fireEvent.submit(name.closest('form'));

  expect(onAdd).toHaveBeenCalledWith('Alex Morgan', '4200');
  expect(name).toHaveValue('');
  expect(salary).toHaveValue(null);
});
