import { Meta, StoryObj } from '@storybook/react'
import { GameImage } from './GameImage'
import { mockGameImageProps } from './GameImage.mock'

const meta: Meta<typeof GameImage> = {
  title: 'Gamepad/GameImage',
  component: GameImage,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof GameImage>

export const Base: Story = {
  args: {
    ...mockGameImageProps.base,
  },
}
