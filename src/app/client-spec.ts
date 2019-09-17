interface ITile {
  cols: number;
  rows: number;
  text?: string;
  color?: string;
  id?: string;
  image?: string;
}
const tiles: ITile[] = [
  {text: 'One', cols: 4, rows: 5, id: 'primaryCard', image: '../../../assets/home.png'},
  {text: 'Two', cols: 2, rows: 3, id: 'secondCard', image: '../../../assets/big.png'},
  {text: 'Three', cols: 2, rows: 3, id: 'thirdCard', image: '../../assets/little.png' },
  {text: 'Four', cols: 2, rows: 3, id: 'fourthCard', image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Pickle_Rick.jpg'},
  {text: 'Five', cols: 2, rows: 3, id: 'fifthCard', image: 'https://picsum.photos/200/300/?random'},
];

export {
  ITile,
  tiles,
}