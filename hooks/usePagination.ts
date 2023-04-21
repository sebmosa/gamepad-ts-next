import { useMemo } from 'react'

export const dots = '...'

const firstPage = 1
const neighborRange = 2

const range = (start: number, end: number): number[] => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

interface IPagination {
  count: number
  pageSize: number
  currentPage: number
}

export const usePagination = ({
  count,
  pageSize,
  currentPage,
}: IPagination) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(count / pageSize)
    const totalPageNumbers = neighborRange + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - neighborRange, 1)
    const rightSiblingIndex = Math.min(
      currentPage + neighborRange,
      totalPageCount
    )

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * neighborRange
      const leftRange = range(1, leftItemCount)

      return [...leftRange, dots, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * neighborRange
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )

      return [firstPage, dots, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPage, dots, ...middleRange, dots, totalPageCount]
    }

    return []
  }, [count, pageSize, currentPage])

  return { paginationRange }
}
