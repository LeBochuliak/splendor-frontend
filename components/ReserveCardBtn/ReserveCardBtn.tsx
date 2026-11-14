import axios from 'axios'
import { useMutation } from '@tanstack/react-query';
import type { Game } from '@/types/game';
import { useGamesStore } from '@/stores/gameStore';
import { useCardStore } from '@/stores/cardStore'
import { useActionStore } from '@/stores/actionStore';

const ReserveBtn = () => {
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
            console.error("Failed to reserve the card", error);
        }
    })
    const handleClick = () => {
        
        mutation.mutate({cardId, level: levelSelected});
    }


    return (
    <button className={`actionBtn ${isTierSelected && 'actionReserveBtnActive'} ${isCardSelected && 'actionBtnActive'}`} type='button' onClick={handleClick}>
        <svg width='16' height='16'>
            <use href='sprite.svg#icon-bookmark'/>
        </svg>
        Reserve a card
    </button>
    )
    
}

export default ReserveBtn;