import { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { mockFooterProps } from './Footer.mock'

const meta: Meta<typeof Footer> = {
  title: 'Gamepad/Footer',
  component: Footer,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Footer>

export const Base: Story = {
  args: {
    ...mockFooterProps.base,
  },
}
