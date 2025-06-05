
import {Text} from '@shopify/polaris'

interface ChessPieceProps {
  piece: {
    type: string
    color: 'white' | 'black'
  }
}

const pieceSymbols: Record<string, string> = {
  queen: '👸',
  rook: '🏰',
  bishop: '⛪',
  knight: '🐴',
  pawn: '⭐',
}

const ShoppyMascot = ({color}: {color: string}) => (
  <svg width="32" height="32" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M800 200H200C178.783 200 158.434 208.42 143.431 223.431C128.429 238.443 120 258.783 120 280V720C120 741.217 128.429 761.557 143.431 776.569C158.434 791.58 178.783 800 200 800H800C821.217 800 841.566 791.58 856.569 776.569C871.571 761.557 880 741.217 880 720V280C880 258.783 871.571 238.443 856.569 223.431C841.566 208.42 821.217 200 800 200Z" fill={color === 'white' ? '#ffffff' : '#000000'} stroke={color === 'white' ? '#000000' : '#ffffff'} strokeWidth="40"/>
    <path d="M350 100C350 89.0609 354.741 78.5279 363.428 70.8274C372.116 63.1268 383.935 59 396.25 59H603.75C616.065 59 627.884 63.1268 636.572 70.8274C645.259 78.5279 650 89.0609 650 100V200H350V100Z" fill={color === 'white' ? '#ffffff' : '#000000'} stroke={color === 'white' ? '#000000' : '#ffffff'} strokeWidth="40"/>
    <circle cx="350" cy="450" r="50" fill={color === 'white' ? '#000000' : '#ffffff'}/>
    <circle cx="650" cy="450" r="50" fill={color === 'white' ? '#000000' : '#ffffff'}/>
    <path d="M500 550L450 650H550L500 550Z" fill={color === 'white' ? '#000000' : '#ffffff'}/>
    <path d="M300 600C300 600 400 700 500 700C600 700 700 600 700 600" stroke={color === 'white' ? '#000000' : '#ffffff'} strokeWidth="40" />
