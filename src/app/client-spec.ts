interface ITile {
  cols: number;
  rows: number;
  title?: string;
  color?: string;
  id?: number;
  image?: string;
}
const tiles: ITile[] = [
  {title: 'One', cols: 4, rows: 5, id: 1, image: '../../../assets/home.png'},
  {title: 'Two', cols: 2, rows: 3, id: 2, image: '../../../assets/big.png'},
  {title: 'Three', cols: 2, rows: 3, id: 3, image: '../../assets/little.png' },
  {title: 'Four', cols: 2, rows: 3, id: 4, image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Pickle_Rick.jpg'},
  {title: 'Five', cols: 2, rows: 3, id: 5, image: 'https://picsum.photos/200/300/?random'},
];
const mobileTiles: ITile[] = [
  {title: 'One', cols: 1, rows: 5, id: 1, image: '../../../assets/home.png'},
  {title: 'Two', cols: 1, rows: 3, id: 2, image: '../../../assets/big.png'},
  {title: 'Three', cols: 1, rows: 3, id: 3, image: '../../assets/little.png' },
  {title: 'Four', cols: 1, rows: 3, id: 4, image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Pickle_Rick.jpg'},
  {title: 'Five', cols: 1, rows: 3, id: 5, image: 'https://picsum.photos/200/300/?random'},
];
const heading: string = 'Featured Projects'
const copyright: string = '© 2019 - Tall Order Films'

export {
  copyright,
  heading,
  ITile,
  tiles,
  mobileTiles,
}