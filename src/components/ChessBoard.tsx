import {Card, BlockStack, Banner, Text} from '@shopify/polaris'
import {useState, useEffect} from 'react'
import ChessPiece from './ChessPiece'
import {initialBoardState, type BoardState, type Position} from '../utils/chess'

interface ChessBoardProps {
  onWin: (color: 'white' | 'black') => void;
}

export default function ChessBoard({onWin}: ChessBoardProps) {
  const [board, setBoard] = useState<BoardState>(initialBoardState)
  const [currentTurn, setCurrentTurn] = useState<'white' | 'black'>('white')
  const [selectedPiece, setSelectedPiece] = useState<Position | null>(null)
  const [lastMove, setLastMove] = useState<{from: Position; to: Position} | null>(null)

  const checkWinner = (board: BoardState) => {
    const hasKing = (color: 'white' | 'black') => 
      board.some(row => row.some(piece => piece?.type === 'king' && piece.color === color))
    
    if (!hasKing('black')) onWin('white')
    if (!hasKing('white')) onWin('black')
  }

  const handleSquareClick = (row: number, col: number) => {
    const piece = board[row][col]

    if (!selectedPiece && piece && piece.color === currentTurn) {
      setSelectedPiece({row, col})
      return
    }

    if (selectedPiece) {
      const newBoard = [...board.map(row => [...row])]
      const movingPiece = newBoard[selectedPiece.row][selectedPiece.col]
      
      if (!piece || piece.color !== currentTurn) {
        newBoard[row][col] = movingPiece
        newBoard[selectedPiece.row][selectedPiece.col] = null
        setBoard(newBoard)
        setLastMove({
          from: selectedPiece,
          to: {row, col}
        })
        setCurrentTurn(currentTurn === 'white' ? 'black' : 'white')
        checkWinner(newBoard)
      }
      
      setSelectedPiece(null)
    }
  }

  const isLastMovedSquare = (row: number, col: number) => {
    return lastMove?.to.row === row && lastMove?.to.col === col
  }

  return (
    <div style={{maxWidth: '600px', margin: '0 auto'}}>
      <Banner title={`${currentTurn === 'white' ? 'Green' : 'Red'} pieces turn!`}>
        <Text as="p" variant="bodyMd">
          Win Shop Cash by capturing the opponent's king! 👑
        </Text>
      </Banner>
      
      <div style={{marginTop: '20px'}}>
        <BlockStack gap="100">
          {board.map((row, i) => (
            <div key={i} style={{display: 'flex', gap: '4px'}}>
              {row.map((piece, j) => (
                <Card key={`${i}-${j}`} padding="0">
                  <div
                    onClick={() => handleSquareClick(i, j)}
                    className="board-square"
                    style={{
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: selectedPiece?.row === i && selectedPiece?.col === j
                        ? '#95BF47' // Shop green for selected
                        : isLastMovedSquare(i, j)
                          ? '#DFF9E7' // Light green for last move
                          : (i + j) % 2 === 0 
                            ? '#f6f6f7' 
                            : '#e3e3e3',
                      cursor: 'pointer',
                      border: piece?.color === currentTurn ? '2px solid #95BF47' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {piece && (
                      <div className={piece.color === currentTurn ? 'piece-hover' : ''}>
                        <ChessPiece piece={piece} />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </BlockStack>
      </div>
    </div>
  )
}
