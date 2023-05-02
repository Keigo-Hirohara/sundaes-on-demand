import { user, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('初期状態ではボタンが無効になっている', () => {
  render(<SummaryForm />);
  const button = screen.getByRole('button', { name: /注文する/i });
  expect(button).toBeDisabled();
});

test('チェックボックスの状態によってボタンの有効、無効が切り替わる', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button', { name: /注文する/i });
  await user.click(checkbox);
  expect(button).toBeEnabled();
  await user.click(checkbox);
  expect(button).toBeDisabled();
});

test('注文ボタンをホバーすると注文に関するメッセージが表示される', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const nullOpover = screen.queryByText('注文内容を確認してください');
  expect(nullOpover).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/利用規約/i);
  await user.hover(termsAndConditions);
  const popup = screen.getByText('注文内容を確認してください');
  expect(popup).toBeInTheDocument();
  expect(termsAndConditions).toBeInTheDocument();

  await user.unhover(termsAndConditions);
  expect(popup).not.toBeInTheDocument();
});
