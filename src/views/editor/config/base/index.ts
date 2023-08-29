import type { RegisterConfig } from '../../types'
import { registerButton } from './button'
import { registerInput } from './input'
import { registerTable } from './table'
import { registerCard } from './card'

export const registerBase = (registerConfig: RegisterConfig) => {
  registerButton(registerConfig)
  registerInput(registerConfig)
  registerTable(registerConfig)
  registerCard(registerConfig)
}
