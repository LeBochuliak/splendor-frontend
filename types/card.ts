export interface Card {
    id: number,
    level: number,
    price: 
        {   
            white: number,   
            blue: number, 
            green: number, 
            red: number, 
            black: number 
        },
    resource: string,
    points: number,
}
export default Card;