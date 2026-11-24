import axios from 'axios'
import { useMutation } from '@tanstack/react-query';
import type { Game } from '@/types/game';
import { useGamesStore } from '@/stores/gameStore';
import { useCardStore } from '@/stores/cardStore';
import { useActionStore } from '@/stores/actionStore';
import { useSelectedTokensStore } from '@/stores/selectedTokensStore'

const BuyCardBtn = () => {
    const { game } = useGamesStore();
    const setGame = useGamesStore((state) => state.setGame);
    const { cardId, cardPoints } = useCardStore();
    const isCardSelected = useCardStore((state) => state.isCardSelected);
    const setIsCardSelected = useCardStore((state) => state.setIsCardSelected);
    const setCardId = useCardStore((state) => state.setCardId);
    const addAction = useActionStore(state => state.addAction);
    const isTierSelected = useCardStore((state) => state.isTierSelected);
    const { isActive } = useSelectedTokensStore();

    const isTokenSelected = Object.entries(isActive).some(([color, value]) => value === true);
    const player = game?.players.find((player) => player.id === game.currentPlayerId);
    const reservedCard = player?.reservedCards.find((card) => card.id === cardId);
    const previousNobles = player?.nobles ?? [];

    const mutation = useMutation({
        mutationFn: async (cardId: number) => {
            const { data } = await axios.patch<{ game: Game }>('https://splendor-backend-mbjw.onrender.com/action/cards/buyCard', {'playerId': game?.currentPlayerId, 'cardId': cardId});

            return {
                game: data.game
            }
        },
        onSuccess: (data) => {
            const updatedPlayer = data.game.players.find(
                (p) => p.id !== data.game.currentPlayerId
            );

            const updatedNobles = updatedPlayer?.nobles ?? [];
            
            addAction({
                id: crypto.randomUUID(),
                playerName: player?.name || 'Player',
                action: `${(reservedCard ? 'bought a reserved card' : 'bought a card')}`,
                cardPoints: cardPoints
            });
            setGame(data.game);
            
            if (updatedNobles.length > previousNobles.length) {
                addAction({
                id: crypto.randomUUID(),
                playerName: player?.name || 'Player',
                action: 'took noble',
                cardPoints: player?.nobles.at(-1)?.points ?? 0
                });
            }
            setIsCardSelected(false);
            setCardId(0);
            
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message;

                console.log(message);
            }
        }
    })
    const handleClick = () => {
        mutation.mutate(cardId);
    }

    return (
    <button className={`actionBtn ${isCardSelected && 'actionBtnActive'} `} type='button' onClick={handleClick} disabled={isTierSelected || isTokenSelected}>
        <svg width='16' height='16'>
            <use href='sprite.svg#icon-shopping-bag'/>
        </svg>
        Buy a card
    </button>
    )
    
}

export default BuyCardBtn;