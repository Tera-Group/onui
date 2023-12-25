// ** MUI Imports
import { Palette, Theme } from '@mui/material/styles'
import { ComponentsPropsList } from '@mui/material'

export type OwnerStateThemeType = {
    theme: Theme
    ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>
}

// ** Overrides Imports
// ** Overrides Layout
import MuiAppBar from './app-bar'
import MuiBackdrop from './backdrop'
import MuiDrawer from './drawer'

// ** Overrides Buttons
import MuiButton from './button'
import MuiIconButton from './icon-button'
import MuiToggleButton from './toggle-button'
import MuiToggleButtonGroup from './toggle-button-group'
import MuiCircularProgress from './circular-progress'
import MuiChip from './chip'

// ** Overrides Dialog
import MuiDialog from './dialog'

// ** Overrides Modal
import MuiModal from './modal'

// ** Overrides Menu
import MuiMenu from './menu'

// ** Overrides Inputs
import MuiAutocomplete from './autocomplete'
import MuiCheckbox from './checkbox'
import MuiInputBase from './input-base'
import MuiSwitch from './switch-button'

// ** Overrides Lists
import MuiListItemButton from './list-item-button'
import MuiListItemIcon from './list-item-icon'
import MuiListItem from './list-item'

// ** Overrides Table
import MuiDataGrid from './data-grid'
import MuiPagination from './pagination'
import MuiDivider from './divider'
import MuiTableCell from './table-cell'

// ** Overrides Tabs
import MuiTabs from './tabs'
import MuiTab from './tab'

// ** Overrides Popover
import MuiPopover from './popover'
import MuiPaper from './paper'
import MuiPopper from './popper'

import MuiAlert from './alert'

const overrides = (mode: Palette['mode']) => {
    const appbar = MuiAppBar()
    const alert = MuiAlert()
    const backdrop = MuiBackdrop()
    const button = MuiButton()
    const iconButton = MuiIconButton()
    const circularProgress = MuiCircularProgress()
    const dialog = MuiDialog()
    const modal = MuiModal()
    const menu = MuiMenu()
    const drawer = MuiDrawer()
    const chip = MuiChip()
    const dataGrid = MuiDataGrid()
    const inputBase = MuiInputBase()
    const autocomplete = MuiAutocomplete()
    const pagination = MuiPagination()
    const divider = MuiDivider()
    const listItem = MuiListItem()
    const listItemButton = MuiListItemButton()
    const listItemIcon = MuiListItemIcon()
    const tableCell = MuiTableCell()
    const tabs = MuiTabs()
    const tab = MuiTab()
    const toggleButton = MuiToggleButton()
    const toggleButtonGroup = MuiToggleButtonGroup()
    const popover = MuiPopover()
    const popper = MuiPopper()
    const paper = MuiPaper()
    const switchButton = MuiSwitch()
    const checkbox = MuiCheckbox()

    return Object.assign(
        autocomplete,
        appbar,
        alert,
        backdrop,
        button,
        circularProgress,
        checkbox,
        chip,
        dataGrid,
        dialog,
        modal,
        menu,
        drawer,
        iconButton,
        inputBase,
        listItemButton,
        listItemIcon,
        listItem,
        pagination,
        divider,
        tableCell,
        tabs,
        tab,
        toggleButton,
        toggleButtonGroup,
        popover,
        popper,
        paper,
        switchButton
    )
}

export default overrides
