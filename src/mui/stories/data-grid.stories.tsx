import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { OnCheckbox } from '../../shared'

export default {
    title: 'MUI/Data Grid',
    component: DataGrid
} as Meta<typeof DataGrid>

const Template: StoryFn<typeof DataGrid> = args => <DataGrid {...args} />

const columns: GridColDef[] = [
    {
        flex: 0.1,
        field: 'id',
        minWidth: 80,
        headerName: 'ID'
    },
    {
        flex: 0.25,
        minWidth: 200,
        field: 'full_name',
        headerName: 'Name'
    }
]

const rows = [
    {
        id: 1,
        full_name: "Korrie O'Crevy"
    },
    {
        id: 7,
        full_name: 'Eileen Diehn'
    },
    {
        id: 11,
        full_name: 'De Falloon'
    },
    {
        id: 3,
        full_name: 'Stella Ganderton'
    },
    {
        id: 5,
        full_name: 'Harmonia Nisius'
    },
    {
        id: 6,
        full_name: 'Genevra Honeywood'
    },
    {
        id: 4,
        full_name: 'Dorolice Crossman'
    },
    {
        id: 8,
        full_name: 'Richardo Aldren'
    },
    {
        id: 9,
        full_name: 'Allyson Moakler'
    },
    {
        id: 10,
        full_name: 'Merline Penhalewick'
    }
]

export const Playground: StoryFn<typeof DataGrid> = () => {
    const [value, setValue] = React.useState('one')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <DataGrid
            components={{
                BaseCheckbox: OnCheckbox
            }}
            checkboxSelection={true}
            columns={columns}
            rows={rows}
            autoHeight={true}
            className='rounded-none'
        />
    )
}
