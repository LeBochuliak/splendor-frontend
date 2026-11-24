'use client'
import type { Game } from '@/types/game'
import type { TokenColor } from '@/types/tokensColorForTake'

interface canBuyProps {
    game: Game | null;
    cardPrice: Record<TokenColor, number>;
}

const canBuy = ({game, cardPrice}: canBuyProps) : boolean=> {
        
        const player = game?.players.find((player) => player.id === game.currentPlayerId);
        
        if (!player) return false;
    
        let goldRequired = 0;
        
        const colors: TokenColor[] = ['white', 'green', 'blue', 'red', 'black'];

        for (const color of colors) {
            if (cardPrice[color] > 0) {
                const price = cardPrice[color];
                const bonuses = player.resources[color] ?? 0;
                const available = player.tokens[color] ?? 0;

                const required = price - bonuses - available;

                if (required > 0) {
                    goldRequired += required;
                }
            }
            
        }

        return goldRequired <= player.tokens.gold;
    };

export default canBuy;