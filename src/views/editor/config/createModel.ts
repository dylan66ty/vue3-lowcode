export const createModel = (
  label: string,
  modelBindField: string,
  modelInputField = 'modelValue'
) => {
  return {
    label,
    modelBindField,
    modelInputField
  }
}
