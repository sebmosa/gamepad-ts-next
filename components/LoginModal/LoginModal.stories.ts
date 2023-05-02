import { Meta, StoryObj } from '@storybook/react'
import { LoginModal } from './LoginModal'
import { mockLoginModalProps } from './LoginModal.mock'

const meta: Meta<typeof LoginModal> = {
  title: 'Gamepad/LoginModal',
  component: LoginModal,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof LoginModal>

export const Base: Story = {
  args: {
    ...mockLoginModalProps.base,
  },
}
