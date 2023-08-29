type BaseType = string | number
interface Option {
  label: string
  value: string
}

export const createInputProp = (label: string, defaultValue: BaseType) => {
  return {
    type: 'input',
    label,
    defaultValue
  }
}

export const createSelectProp = (label: string, defaultValue: BaseType, options: Option[]) => {
  return {
    type: 'select',
    label,
    defaultValue,
    options
  }
}

export const createSwitchProp = (label: string, defaultValue: boolean) => {
  return {
    type: 'switch',
    label,
    defaultValue
  }
}

export const createColorProp = (label: string, defaultValue: BaseType) => {
  return {
    type: 'color',
    label,
    defaultValue
  }
}

export const createRadioProp = (label: string, defaultValue: BaseType, options: Option[]) => {
  return {
    type: 'radio',
    label,
    defaultValue,
    options
  }
}

export const createInputNumberProp = (label: string, defaultValue: BaseType) => {
  return {
    type: 'inputNumber',
    label,
    defaultValue
  }
}

export const createStyleLayoutProp = (label: string, defaultValue: Record<string, string>) => {
  return {
    type: 'layout',
    label,
    defaultValue
  }
}

export const createTableColumnsProp = (label: string, defaultValue: Record<string, any>[]) => {
  return {
    type: 'tableColumns',
    label,
    defaultValue
  }
}

export const createTableDataProp = (label: string, defaultValue: any[]) => {
  return {
    type: 'tableData',
    label,
    defaultValue
  }
}
