import { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { mockSelectProps } from './Select.mock'

const meta: Meta<typeof Select> = {
  title: 'Gamepad/Select',
  component: Select,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Select>

export const Base: Story = {
  args: {
    ...mockSelectProps.base,
  },
}
