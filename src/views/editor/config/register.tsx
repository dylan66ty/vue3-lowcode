import type { RegisterConfig } from '../types'

// container components
import { registerContainer } from './container'

// base components
import { registerBase } from './base'

export const register = (registerConfig: RegisterConfig) => {
  registerContainer(registerConfig)
  registerBase(registerConfig)
}
