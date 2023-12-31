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
import MuiBadge from './badge'

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
    const alert = MuiAlert()
    const appbar = MuiAppBar()
    const autocomplete = MuiAutocomplete()
    const backdrop = MuiBackdrop()
    const badge = MuiBadge()
    const button = MuiButton()
    const circularProgress = MuiCircularProgress()
    const chip = MuiChip()
    const checkbox = MuiCheckbox()
    const dataGrid = MuiDataGrid()
    const dialog = MuiDialog()
    const divider = MuiDivider()
    const drawer = MuiDrawer()
    const iconButton = MuiIconButton()
    const inputBase = MuiInputBase()
    const listItem = MuiListItem()
    const listItemButton = MuiListItemButton()
    const listItemIcon = MuiListItemIcon()
    const menu = MuiMenu()
    const modal = MuiModal()
    const pagination = MuiPagination()
    const paper = MuiPaper()
    const popover = MuiPopover()
    const popper = MuiPopper()
    const tableCell = MuiTableCell()
    const tabs = MuiTabs()
    const tab = MuiTab()
    const toggleButton = MuiToggleButton()
    const toggleButtonGroup = MuiToggleButtonGroup()
    const switchButton = MuiSwitch()

    return Object.assign(
        autocomplete,
        alert,
        appbar,
        backdrop,
        badge,
        button,
        circularProgress,
        checkbox,
        chip,
        dataGrid,
        dialog,
        divider,
        drawer,
        iconButton,
        inputBase,
        menu,
        modal,
        listItemButton,
        listItemIcon,
        listItem,
        pagination,
        paper,
        popover,
        popper,
        tableCell,
        tabs,
        tab,
        toggleButton,
        toggleButtonGroup,
        switchButton
    )
}

export default overrides
