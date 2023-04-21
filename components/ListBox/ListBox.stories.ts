import { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'
import { mockListBoxProps } from './ListBox.mock'

const meta: Meta<typeof ListBox> = {
  title: 'Gamepad/ListBox',
  component: ListBox,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ListBox>

export const Base: Story = {
  args: {
    ...mockListBoxProps.base,
  },
}
