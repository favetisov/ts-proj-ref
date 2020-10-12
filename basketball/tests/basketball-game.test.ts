import { BasketballGame } from '@basketball/basketball-game';

describe('testing basketball game', () => {
  test('starting game', () => {
    const game = new BasketballGame();
    game.start();
    expect(game.state).toBe('in_progress');
  });
});

export const testSomething = {};
