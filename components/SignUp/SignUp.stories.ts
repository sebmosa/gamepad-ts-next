import { Meta, StoryObj } from '@storybook/react'
import { SignUp } from './SignUp'
import { mockSignUpProps } from './SignUp.mock'

const meta: Meta<typeof SignUp> = {
  title: 'Gamepad/SignUp',
  component: SignUp,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof SignUp>

export const Base: Story = {
  args: {
    ...mockSignUpProps.base,
  },
}
