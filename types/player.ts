import type { Card } from  './card';
import type { Noble } from './noble'

export interface Player {
    id: string,
    name: string,
    points: number,
    resources: {
      white: number,
      green: number,
      blue: number,
      red: number,
      black: number,
    },
    tokens: {
      white: number,
      green: number,
      blue: number,
      red: number,
      black: number,
      gold: number,
    },
    totalTokens: number,
    reservedCards: Card[],
    developmentCards: Card[],
    nobles: Noble[],
  };
