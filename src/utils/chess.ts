export interface ChessPiece {
  type: string
  color: 'white' | 'black'
}

export interface Position {
  row: number
  col: number
}

export type BoardState = (ChessPiece | null)[][]

export const initialBoardState: BoardState = [
  [
    {type: 'rook', color: 'black'},
    {type: 'knight', color: 'black'},
    {type: 'bishop', color: 'black'},
    {type: 'queen', color: 'black'},
    {type: 'king', color: 'black'},
    {type: 'bishop', color: 'black'},
    {type: 'knight', color: 'black'},
    {type: 'rook', color: 'black'},
  ],
  Array(8).fill({type: 'pawn', color: 'black'}),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill({type: 'pawn', color: 'white'}),
  [
    {type: 'rook', color: 'white'},
    {type: 'knight', color: 'white'},
    {type: 'bishop', color: 'white'},
    {type: 'queen', color: 'white'},
    {type: 'king', color: 'white'},
    {type: 'bishop', color: 'white'},
    {type: 'knight', color: 'white'},
    {type: 'rook', color: 'white'},
  ],
]
