import { GameEvent } from '@shared/game-event';

export class Game {
  state: 'not_started' | 'in_progress' | 'finished';
  events: GameEvent[] = [];

  start() {
    this.state = 'in_progress';
  }

  end() {
    this.state = 'finished';
  }
}
