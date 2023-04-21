import { Meta, StoryObj } from '@storybook/react'
import { SearchNav } from './SearchNav'
import { mockSearchNavProps } from './SearchNav.mock'

const meta: Meta<typeof SearchNav> = {
  title: 'Gamepad/SearchNav',
  component: SearchNav,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof SearchNav>

export const Base: Story = {
  args: {
    ...mockSearchNavProps.base,
  },
}
