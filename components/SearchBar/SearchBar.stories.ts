import { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './SearchBar'
import { mockSearchBarProps } from './SearchBar.mock'

const meta: Meta<typeof SearchBar> = {
  title: 'Gamepad/SearchBar',
  component: SearchBar,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Base: Story = {
  args: {
    ...mockSearchBarProps.base,
  },
}
