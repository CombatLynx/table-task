export interface ITable {
    header: string[],
    data: string[][]
}

export interface ITableContext {
    page: number,
    setPage: (page: number) => void,
    limit: number,
    setLimit: (limit: number) => void,
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void,
}

export interface IPaginationContext {
    page: number,
    setPage: (page: number) => void,
    limit: number,
    setLimit: (limit: number) => void,
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void,
}

export interface IPagination {
    maxPageNumber: number,
    currentPage: number,
}

export interface IPageButton {
    current?: boolean,
}

export interface IHeader {
    children?: React.ReactNode,
    columnIndex: number,
    rows: any[][],
    setRows: (rows: any[][]) => void,
}