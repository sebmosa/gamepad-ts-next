import { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import { mockHeroProps } from './Hero.mock'

const meta: Meta<typeof Hero> = {
  title: 'Gamepad/Hero',
  component: Hero,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Hero>

export const Base: Story = {
  args: {
    ...mockHeroProps.base,
  },
}
