import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'
import { mockPaginationProps } from './Pagination.mock'

const meta: Meta<typeof Pagination> = {
  title: 'Gamepad/Pagination',
  component: Pagination,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Base: Story = {
  args: {
    ...mockPaginationProps.base,
  },
}
