import axios from 'axios'
import { useMutation } from '@tanstack/react-query';
import type { Game } from '@/types/game';
import { useGamesStore } from '@/stores/gameStore';
import { useCardStore } from '@/stores/cardStore'
import { useActionStore } from '@/stores/actionStore';
import { useSelectedTokensStore } from '@/stores/selectedTokensStore';
import type { Action } from '@/types/action';
import { useComputerStore } from '@/stores/computerStore';
import { useEffect } from 'react'


interface ReserveBtnProps {
  action?: Action | null;
}

const ReserveBtn = ({ action }: ReserveBtnProps) => {
    const { game } = useGamesStore();
    const setGame = useGamesStore((state) => state.setGame);
    const { cardId, levelSelected } = useCardStore();
    const isTierSelected = useCardStore((state) => state.isTierSelected);
    const isCardSelected = useCardStore((state) => state.isCardSelected);
    const setIsCardSelected = useCardStore((state) => state.setIsCardSelected);
    const setLevelSelected = useCardStore((state) => state.setLevelSelected);
    const setIsTierSelected = useCardStore((state) => state.setIsTierSelected);
    const setCardId = useCardStore((state) => state.setCardId);
    const addAction = useActionStore(state => state.addAction);
    const { isActive } = useSelectedTokensStore();
    const computerPlayerId = useComputerStore((state) => state.computerPlayerId);


    const isTokenSelected = Object.entries(isActive).some(([color, value]) => value === true);
    const player = game?.players.find((player) => player.id === game.currentPlayerId);
    
    const mutation = useMutation({
        mutationFn: async ({ cardId, level }: { cardId?: number; level?: string }) => {
            if (cardId) {
                const { data } = await axios.patch<Game>('https://splendor-backend-mbjw.onrender.com/action/cards/reserveBoardCard', {'playerId': game?.currentPlayerId, 'cardId': cardId});
                return data;
            }
            if (level) {
                const { data }  = await axios.patch<Game>('https://splendor-backend-mbjw.onrender.com/action/cards/reserveDeckCard', {'playerId': game?.currentPlayerId, 'level': level});
                return data;
                
            }
            throw new Error('Either cardId or level must be provided');
        },
        onSuccess: (data) => {
            addAction({
                id: crypto.randomUUID(),
                playerName: player?.name || 'Player',
                action: `${(isTierSelected ? `reserved card from deck` : 'reserved card')}`,
                cardPoints: 0
            });
            setGame(data);
            setIsTierSelected(false);
            setIsCardSelected(false);
            setLevelSelected('');
            setCardId(0);
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message;

                console.log(message);
            }
        }
    })

    useEffect(() => {
          if (
            game?.currentPlayerId === computerPlayerId &&
            player &&
            action?.action === 'Reserve card' && 
            !mutation.isPending
          ) {
            console.log('Mutation started - reserve card', 'cardId:', action.cardId,
                'level:', action.level);

            mutation.mutate({
                cardId: action.cardId,
                level: action.level
            });
        }
    }
    , [game?.currentPlayerId, computerPlayerId, player, action, mutation.isPending]);

    const handleClick = () => {
        
        mutation.mutate({cardId, level: levelSelected});
    }


    return (
    <button className={`actionBtn ${isTierSelected && 'actionReserveBtnActive'} ${isCardSelected && 'actionBtnActive'}`} type='button' onClick={handleClick} disabled={isTokenSelected}>
        <svg width='16' height='16'>
            <use href='sprite.svg#icon-bookmark'/>
        </svg>
        Reserve a card
    </button>
    )
    
}

export default ReserveBtn;