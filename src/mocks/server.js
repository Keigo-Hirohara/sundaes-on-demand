import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer(
  rest.get('http://localhost:3030/cheeses', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    );
  })
);
