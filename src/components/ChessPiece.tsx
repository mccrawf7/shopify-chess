import {Text} from '@shopify/polaris'

interface ChessPieceProps {
  piece: {
    type: string
    color: 'white' | 'black'
  }
}

const pieceSymbols: Record<string, string> = {
  king: '👑',
  queen: '👸',
  rook: '🏰',
  bishop: '⛪',
  knight: '🐴',
  pawn: '⭐',
}

export default function ChessPiece({piece}: ChessPieceProps) {
  return (
    <Text 
      variant="headingXl" 
      as="span" 
      tone={piece.color === 'white' ? 'success' : 'critical'}
    >
      {pieceSymbols[piece.type]}
    </Text>
  )
}
