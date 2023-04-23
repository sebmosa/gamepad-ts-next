import { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './Dialog'
import { mockDialogProps } from './Dialog.mock'

const meta: Meta<typeof Dialog> = {
  title: 'Gamepad/BaseTemplate',
  component: Dialog,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Base: Story = {
  args: {
    ...mockDialogProps.base,
  },
}
