export interface GrpData {
    id: number
    type: number
    label: string
    dateTime: Date
    favorite?: boolean
    loaded?: boolean
}

export interface GrpAction {
    service: string
    label: string
    icon?: string
}

export interface GrpFieldItem {
    id: number
    cmd: string
    label: string
}

export interface GrpField {
    order: number
    id: number
    label: string
    required: boolean
    size: number
    type: string
    multiple: true
    module: string
    service: string
    isRange: boolean
    items?: GrpFieldItem[]
    content?: any[]
}

export interface GrpDataConsulta extends GrpData{
    filters?: GrpField[]
    link?: string
}

export interface GrpDataCadastro extends GrpData{
    fields: GrpField[]
    actions: GrpAction[]
}

export interface GrpDataProcessamento extends GrpData {

}

export interface GrpDataDashBoard extends GrpData {
    
}

export interface GrpTab {
    id: number
    data: GrpData
}

export interface GrpTabs {
    tabs: GrpTab[]
    selectedTabId: number
    lastId: number
}