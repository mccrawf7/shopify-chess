import {Page, Layout, Card, Text, Button, BlockStack, Icon} from '@shopify/polaris'
import {StoreIcon} from '@shopify/polaris-icons'
import {useState} from 'react'
import ChessBoard from './components/ChessBoard'
import GameControls from './components/GameControls'
import ShopRewards from './components/ShopRewards'
import './styles.css'

export default function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [winner, setWinner] = useState<'white' | 'black' | null>(null)

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <div className="game-container">
                <div className="stars">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="star" style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}/>
                  ))}
                </div>
                
                <Text variant="heading2xl" as="h1" alignment="center">
                  Shopify Chess
                </Text>
                
                {!gameStarted ? (
                  <div className="start-screen">
                    <div style={{width: '100px', marginBottom: '20px'}} className="bounce-animation">
                      <div style={{color: '#95BF47'}}>
                        <Icon source={StoreIcon} />
                      </div>
                    </div>
                    <Button size="large" primary onClick={() => setGameStarted(true)}>
                      Start Playing!
                    </Button>
                  </div>
                ) : (
                  <BlockStack gap="400">
                    <GameControls />
                    <ChessBoard onWin={(color) => setWinner(color)} />
                    {winner && <ShopRewards winner={winner} />}
                  </BlockStack>
                )}
              </div>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
