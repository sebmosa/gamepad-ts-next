import { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import { mockHeaderProps } from './Header.mock'

const meta: Meta<typeof Header> = {
  title: 'Gamepad/Header',
  component: Header,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Header>

export const Base: Story = {
  args: {
    ...mockHeaderProps.base,
  },
}
