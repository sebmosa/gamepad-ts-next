import { dots, usePagination } from '@/hooks/usePagination'
import Image from 'next/image.js'
import chevronLeft from '../../public/Pagination/chevron-left.svg'
import chevronRight from '../../public/Pagination/chevron-right.svg'
import styles from './Pagination.module.css'
export interface IPagination {
  count: number
  pageSize: number
  currentPage: number
  onPageChange: (pageNumber: number) => void
  disabled?: boolean
}

export const Pagination = ({
  currentPage,
  count,
  pageSize,
  onPageChange,
  disabled = false,
}: IPagination) => {
  const { paginationRange } = usePagination({
    currentPage,
    count,
    pageSize,
  })

  const totalPage = Math.ceil(count / pageSize)

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <nav className={styles.pagination}>
      {currentPage !== 1 && (
        <button
          className={styles.page_previous}
          onClick={onPrevious}
          role="button"
          disabled={disabled}
          aria-label="previous page"
        >
          <Image src={chevronLeft} alt="previous page" />
        </button>
      )}

      <ul className={styles.page_list}>
        {paginationRange.map((page, index) => (
          <li
            key={`${page}-${index}`}
            role="tab"
            className={styles.page_list__page}
          >
            {page !== dots ? (
              <button
                onClick={() => onPageChange(page as number)}
                disabled={disabled}
                className={
                  page === currentPage
                    ? styles.page_list__button_active
                    : styles.page_list__button
                }
              >
                {page}
              </button>
            ) : (
              <div>{page}</div>
            )}
          </li>
        ))}
      </ul>

      {currentPage !== totalPage && (
        <button
          className={styles.page_next}
          onClick={onNext}
          role="button"
          disabled={disabled}
          aria-label="next page"
        >
          <Image src={chevronRight} alt="next page" />
        </button>
      )}
    </nav>
  )
}
