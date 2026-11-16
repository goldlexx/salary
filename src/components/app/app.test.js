import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './app';

test('search filters employee names without case sensitivity', () => {
  render(<App />);

  fireEvent.change(screen.getByRole('textbox', { name: 'Поиск сотрудников' }), {
    target: { value: 'alex' },
  });

  expect(screen.getByText('Alex M.')).toBeInTheDocument();
  expect(screen.queryByText('John C.')).not.toBeInTheDocument();
  expect(screen.queryByText('Carl W.')).not.toBeInTheDocument();
});

test('salary filter uses the corrected filter key', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'З/П больше 1000$' }));

  expect(screen.queryByText('John C.')).not.toBeInTheDocument();
  expect(screen.getByText('Alex M.')).toBeInTheDocument();
  expect(screen.getByText('Carl W.')).toBeInTheDocument();
});
