
let games = [
    {id: 1, title: 'The Legend of Zelda: Breath of the Wild', platform: ['Nintendo Switch', 'Wii U']},
    {id: 2, title: 'Super Mario Odyssey', platform: ['Nintendo Switch']},
    {id: 3, title: 'The Witcher 3: Wild Hunt', platform: ['PlayStation 4', 'Xbox one']},
    {id: 4, title: 'The Last of Us Part II', platform: ['PlayStation 4']},
    {id: 5, title: 'Red Dead Redemption 2', platform: ['PlayStation 4', 'Xbox one']}
];

let authors = [
    {id: 1, name: 'Shigeru Miyamoto', verified: true},
    {id: 2, name: 'Eiji Aonuma', verified: false},
    {id: 3, name: 'Hidemaro Fujibayashi', verified: true}
];

let reviews = [
    {id: 1, rating: 9, content: 'A great game', author_id: 1, game_id: 2 },
    {id: 2, rating: 7, content: 'Well', author_id: 2, game_id: 3 },
    {id: 3, rating: 4, content: 'Bad game', author_id: 3, game_id: 4 },
    {id: 4, rating: 10, content: 'Very Good', author_id: 2, game_id: 4 },
    {id: 5, rating: 8, content: 'Good', author_id: 1, game_id: 4 },
    {id: 6, rating: 6, content: 'Bad game', author_id: 3, game_id: 5 },
    {id: 7, rating: 8, content: 'Good', author_id: 1, game_id: 4 },
    {id: 8, rating: 4, content: 'Bad game', author_id: 3, game_id: 3 },
    {id: 9, rating: 9, content: 'A great game', author_id: 2, game_id: 4 },
    {id: 10, rating: 4, content: 'Bad game', author_id: 1, game_id: 4 },
    {id: 11, rating: 4, content: 'Bad game', author_id: 3, game_id: 4 }
]