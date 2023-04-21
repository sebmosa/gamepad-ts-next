import { IPagination } from './Pagination'

const base: IPagination = {
  count: 100,
  pageSize: 20,
  currentPage: 1,
  onPageChange: () => {},
}

export const mockPaginationProps = {
  base,
}
