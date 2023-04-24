import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { mockModalProps } from './Modal.mock'

const meta: Meta<typeof Modal> = {
  title: 'Gamepad/BaseTemplate',
  component: Modal,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Modal>

export const Base: Story = {
  args: {
    ...mockModalProps.base,
  },
}
