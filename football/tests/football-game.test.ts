import { FootballGame } from '@football/football-game';

describe('testing football game', () => {
  test('starting game', () => {
    const game = new FootballGame();
    game.start();
    expect(game.state).toBe('in_progress');
  });
});
