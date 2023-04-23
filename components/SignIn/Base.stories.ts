import { Meta, StoryObj } from '@storybook/react'
import { BaseTemplate } from './Base'
import { mockBaseProps } from './Base.mock'

const meta: Meta<typeof BaseTemplate> = {
  title: 'Gamepad/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof BaseTemplate>

export const Base: Story = {
  args: {
    ...mockBaseProps.base,
  },
}
