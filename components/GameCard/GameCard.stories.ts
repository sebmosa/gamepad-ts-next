import { Meta, StoryObj } from '@storybook/react'
import { GameCard } from './GameCard'
import { mockGameCardProps } from './GameCard.mock'

const meta: Meta<typeof GameCard> = {
  title: 'Gamepad/GameCard',
  component: GameCard,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof GameCard>

export const Base: Story = {
  args: {
    ...mockGameCardProps.base,
  },
}
