import {Card, Text, Button, BlockStack, Icon} from '@shopify/polaris'
import {GiftCardIcon, StoreIcon} from '@shopify/polaris-icons'

interface ShopRewardsProps {
  winner: 'white' | 'black'
}

export default function ShopRewards({winner}: ShopRewardsProps) {
  return (
    <Card>
      <BlockStack gap="400" align="center">
        <div className="winner-animation">
          <Text variant="heading2xl" as="h2" alignment="center">
            🎉 {winner === 'white' ? 'Green' : 'Red'} Wins! 🎉
          </Text>
        </div>
        
        <div style={{width: '80px', color: '#95BF47'}}>
          <Icon source={StoreIcon} />
        </div>
        
        <Text variant="headingMd" as="h3" alignment="center">
          You've won $5 Shop Cash!
        </Text>
        
        <Button icon={GiftCardIcon} primary>
          Claim Your Reward
        </Button>
      </BlockStack>
    </Card>
  )
}
