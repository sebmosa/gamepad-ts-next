import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './SignIn'
import { mockSignInProps } from './SignIn.mock'

const meta: Meta<typeof SignIn> = {
  title: 'Gamepad/SignIn',
  component: SignIn,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof SignIn>

export const Base: Story = {
  args: {
    ...mockSignInProps.base,
  },
}
