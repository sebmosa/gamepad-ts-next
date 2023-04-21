import { Meta, StoryObj } from '@storybook/react'
import { SelectBox } from './SelectBox'
import { mockSelectBoxProps } from './SelectBox.mock'

const meta: Meta<typeof SelectBox> = {
  title: 'Gamepad/SelectBox',
  component: SelectBox,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof SelectBox>

export const Base: Story = {
  args: {
    ...mockSelectBoxProps.base,
  },
}
