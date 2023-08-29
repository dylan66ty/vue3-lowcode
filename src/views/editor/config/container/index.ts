import type { RegisterConfig } from '../../types'
import { registerLayout } from './layout'

export const registerContainer = (registerConfig: RegisterConfig) => {
  registerLayout(registerConfig)
}
