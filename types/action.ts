
import type { TokenColor } from '@/types/tokensColorForTake';

export interface Action {
  action?: 'Take tokens' | 'Buy card' | 'Reserve card' | 'Return tokens' | null;
  level?: 'level1' | 'level2' | 'level3';
  cardId?: number;
  tokens?: TokenColor[] | [];
}