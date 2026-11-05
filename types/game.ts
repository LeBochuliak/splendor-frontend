import type { Player } from './player'
import type { Card } from './card'
import type { Noble } from './noble'

export interface Game {
    status: 'waiting' | 'in_progress' | 'finished',
    players: Player[],
    currentPlayerId: string | null,
    finalRound: boolean,

  tokens: {
    white: number,
    green: number,
    blue: number,
    red: number,
    black: number,
    gold: number,
  },

  cards: {
    level1: {
      board: Card[],
      deck: Card[],
    },
    level2: {
      board: Card[],
      deck: Card[],
    },
    level3: {
      board: Card[],
      deck: Card[],
    },
  },
  nobles: Noble[],
}