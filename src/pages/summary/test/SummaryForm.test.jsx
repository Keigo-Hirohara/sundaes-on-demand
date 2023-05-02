import { render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('初期状態ではボタンが無効になっている', () => {
  render(<SummaryForm />);
  const button = screen.getByRole('button', { name: /注文する/i });
  expect(button).toBeDisabled();
});

test('チェックボックスの状態によってボタンの有効、無効が切り替わる', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button', { name: /注文する/i });
  userEvent.click(checkbox);
  expect(button).toBeEnabled();
  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});
