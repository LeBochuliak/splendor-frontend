import type { Card } from '@/types/card';
import type { Player } from '@/types/player';
import type { Game } from '@/types/game';
import type { TokenColor } from '@/types/tokensColorForTake';
import type { Action } from '@/types/action';

type Level = 'level1' | 'level2' | 'level3';

const colors: TokenColor[]  = ["white", "blue", "green", "red", "black"];


const canBuy = (card: Card, computer: Player) => {

    let goldNeeded = 0;

    for (const color of colors) {
        const required = card.price[color] - computer.resources[color] - computer.tokens[color];
        if (required > 0) {
            goldNeeded += required;
        }
    }
    return computer.tokens.gold >= goldNeeded;
}

const needForBuying = (card: Card, computer: Player) => {
   
        const needForBuying = {
            white: 0,
            blue: 0,
            green: 0,
            red: 0,
            black: 0,
            total: 0
        };
        for (const color of colors) {
            const required = card.price[color] - computer.resources[color] - computer.tokens[color];
            if (required > 0) {
                needForBuying[color] += required;
                needForBuying.total += required
            }
        }

        return {...card, needForBuying}
    }

const getTotalResources = (computer: Player) => {
    return colors.reduce(
        (total, color) => total + computer.resources[color],
        0
    );
};

const getLevelBonus = (level: Level, totalResources: number) => {

    if (totalResources <= 2) {
        return {
            level1: 30,
            level2: 10,
            level3: -20
        }[level];
    }

    if (totalResources <= 4) {
        return {
            level1: 20,
            level2: 10,
            level3: -20
        }[level];
    }

    if (totalResources <= 6) {
        return {
            level1: 10,
            level2: 15,
            level3: 0
        }[level];
    }

    if (totalResources <= 8) {
        return {
            level1: 0,
            level2: 20,
            level3: 0
        }[level];
    }

    return {
        level1: 0,
        level2: 0,
        level3: 0
    }[level];
};

const getBuyingScore = (totalNeeded: number) => {
    if (totalNeeded === 0) return 30;
    if (totalNeeded === 1) return 25;
    if (totalNeeded === 2) return 20;
    if (totalNeeded === 3) return 15;
    if (totalNeeded === 4) return 10;
    if (totalNeeded === 5) return 6;
    if (totalNeeded === 6) return 3;

    return 0;
};

const getCardCost = (game: Game, card: Card, computer: Player, level: Level) => {

    let points = 0;

    const totalResources = getTotalResources(computer);

     points += card.points * 10;

     points += getLevelBonus(level, totalResources);

        for (let i = 0; i < game.nobles.length; i++) {
            if (game.nobles[i].requirement[card.resource as TokenColor] > 0) {
                points += 5;
            }
        } 

        if (computer.resources[card.resource as TokenColor] === 0) {
            points += 8;
        }

        const cardForRating = needForBuying(card, computer);

        points += getBuyingScore(cardForRating.needForBuying.total);

        return points;
}

const findCardsWithMaxValue  = (game: Game, computer: Player) => {
    const cards = [];

    for (let i = 1; i <= 3; i++) {
        const level = `level${i}` as Level;
        cards.push(...game.cards[level].board.map((card) => {return {...card, pointsForComputer: getCardCost(game, card, computer, level)}}))
    }

    if (!cards.length) return [];

    console.log(cards);

    const maxValue = Math.max(...cards.map((card) => card.pointsForComputer));

    return cards.filter((card) => card.pointsForComputer === maxValue);
}

export const getAvailableActions = (game: Game, computer: Player): Action => {

    if (computer.totalTokens > 10) {
        const tokensToReturn: TokenColor[] = [];
        const amount = computer.totalTokens - 10;

        while (tokensToReturn.length < amount) {
            const availableColors = colors.filter(
                (color) => computer.tokens[color] > tokensToReturn.filter((c) => c === color).length);

        const randomIndex = Math.floor(Math.random() * availableColors.length);
        tokensToReturn.push(availableColors[randomIndex]);
        }
        
        return {
            action: 'Return tokens',
            tokens: tokensToReturn,
        }

    }


    const cards = findCardsWithMaxValue(game, computer);

    console.log(cards);
    
    if (computer.reservedCards.some((card) => canBuy(card, computer))) {
        const card = computer.reservedCards.find((card) => canBuy(card, computer));
        return {
            action: 'Buy card',
            cardId: card?.id,
        }
    }

    if (cards.some((card) => canBuy(card, computer))) {
        const card = cards.find((card) => canBuy(card, computer));
        return {
            action: 'Buy card',
            cardId: card?.id,
        }
    }

    const totalTokensInGame = Object.values(game.tokens).reduce((acc, value) => acc + value, 0);
    
    if (totalTokensInGame < 3 || computer.totalTokens > 8) {

        if (computer.reservedCards.length === 3) {
            const tokensForTaking: TokenColor[] = [];
           for (const color of colors) {
                if (game.tokens[color] > 0) {
                    tokensForTaking.push(color);
                }
            }
            return {
                action: 'Take tokens',
                tokens: tokensForTaking,
            }
        }

        console.log('Reserve card');
        
        if (!cards.length || !cards[0].id) {
            return {
            action: 'Reserve card',
            level: 'level1',
            cardId: undefined,
            }
        }
        return {
            action: 'Reserve card',
            cardId: cards[0].id,
            level: undefined,
        }
    }

    const cardsForBuing = cards.map((card) => needForBuying(card, computer));

    const tokensNeeded = [];

    for ( let i = 0; i <= cardsForBuing.length - 1; i++) {
           for (const color of colors) {
                if (cardsForBuing[i].needForBuying[color] > 0) {
                    tokensNeeded.push(color);
                }
            }
    }

    const uniqueTokens = [...new Set(tokensNeeded)];
    const tokensForTaking: TokenColor[] = [];

    for (const color of colors) {
        if (game.tokens[color] > 0 && uniqueTokens.includes(color)) {
                tokensForTaking.push(color);
        }
    }
    if (tokensForTaking.length < 3 ) {
        for (const color of colors) {
            if (game.tokens[color] > 0 && !uniqueTokens.includes(color)) {
                tokensForTaking.push(color);
            }
        }
    }

    console.log(tokensForTaking);

    return {
        action: 'Take tokens',
        tokens: tokensForTaking.slice(0, 3),
    }
    
}