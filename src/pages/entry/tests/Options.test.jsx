import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('サーバーから取得した画像を表示する', async () => {
  render(<Options OptionType="Scoops" />);
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
