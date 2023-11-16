import React from 'react'
import {
    Pagination as MuiPagination,
    TablePagination as MuiTablePagination,
    styled,
    ButtonBase,
    Stack,
    TablePaginationProps,
    TextField
} from '@mui/material'
import OnText from './on-text'

interface ActionProps {
    visible: boolean
    totalPage: number
    onPageChange: any
}

const Action: React.FC<ActionProps> = ({ visible, totalPage, onPageChange }) => {
    const [page, setPage] = React.useState<number>(1)

    if (!visible) return null

    return (
        <Stack direction={'row'} spacing={1} alignItems={'center'} minWidth={212}>
            <OnText size='sm' fontWeight='regular'>
                Đến trang
            </OnText>
            <TextField sx={{ width: 80 }} onChange={event => setPage(parseInt(event.target.value))} />
            <StyledBtn
                disabled={!(page && page > 0 && page <= totalPage)}
                onClick={(event: any) => {
                    onPageChange(event, page - 1)
                }}>
                <OnText size='sm' fontWeight='semibold'>
                    Đi
                </OnText>
            </StyledBtn>
        </Stack>
    )
}

const StyledBtn = styled(ButtonBase)(({ theme }) => ({
    padding: '10px 16px',
    color: theme.palette.grey[600]
}))

type OnPaginationBaseProps = Pick<
    TablePaginationProps,
    | 'labelDisplayedRows'
    | 'onRowsPerPageChange'
    | 'rowsPerPage'
    | 'page'
    | 'onPageChange'
    | 'count'
    | 'labelRowsPerPage'
    | 'rowsPerPageOptions'
    | 'className'
> & {
    showAction?: boolean
}

export interface Props extends OnPaginationBaseProps {}

const OnPagination: React.FC<Props> = ({
    className,
    count,
    page,
    labelRowsPerPage,
    rowsPerPage = 10,
    rowsPerPageOptions = [10, 20, 30],
    showAction = true,
    onPageChange,
    onRowsPerPageChange
}) => {
    const canHideRowsPerPage = !labelRowsPerPage

    return (
        <Stack direction={'row'} alignItems={'center'} className={className}>
            <MuiTablePagination
                component={'div'}
                count={count}
                page={page}
                onPageChange={onPageChange}
                rowsPerPageOptions={!canHideRowsPerPage ? rowsPerPageOptions : []}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={onRowsPerPageChange}
                labelRowsPerPage={
                    <OnText size='sm' fontWeight='regular'>
                        {labelRowsPerPage}
                    </OnText>
                }
                labelDisplayedRows={({ from, to, count }) => {
                    if (canHideRowsPerPage) return null

                    return (
                        <OnText size='sm' fontWeight='regular'>{`Dòng ${from}–${to} / ${
                            count !== -1 ? count : `more than ${to}`
                        }`}</OnText>
                    )
                }}
                ActionsComponent={() => {
                    return (
                        <>
                            <MuiPagination
                                size='large'
                                variant='outlined'
                                shape='rounded'
                                count={Math.ceil(count / rowsPerPage)}
                                page={page + 1}
                                showFirstButton={showAction}
                                showLastButton={showAction}
                                onChange={(e: any, current: number) => onPageChange(e, current - 1)}
                            />
                            <Action
                                visible={showAction}
                                totalPage={Math.ceil(count / rowsPerPage)}
                                onPageChange={onPageChange}
                            />
                        </>
                    )
                }}
            />
        </Stack>
    )
}

export default OnPagination
