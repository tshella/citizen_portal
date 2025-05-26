/**
 * Represents a paginated response from the API
 * @template T The type of items in the response
 */
export interface PaginatedResponse<T> {
  /** Array of items for the current page */
  items: T[];
  /** Total number of items across all pages */
  total: number;
  /** Current page number (1-based) */
  page: number;
  /** Number of items per page */
  limit: number;
  /** Total number of pages */
  totalPages: number;
}

/**
 * Creates an empty paginated response
 * @template T The type of items in the response
 * @returns An empty PaginatedResponse object
 */
export function emptyPaginatedResponse<T>(): PaginatedResponse<T> {
  return {
    items: [],
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0
  };
}