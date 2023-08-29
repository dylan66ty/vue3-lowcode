import { storage } from './helper'

const KEY = 'editorConfig'

class PageSave {
  private data: Record<string, any>
  constructor() {
    this.data = {}
  }
  save(id: string, item: unknown) {
    this.getAll()
    this.data[id] = item
    this.setAll()
  }
  delete(id: string) {
    this.getAll()
    delete this.data[id]
    this.setAll()
  }
  put(id: string, newItem: unknown) {
    this.getAll()
    this.data[id] = newItem
    this.setAll()
  }
  get(id: string) {
    this.getAll()
    const item = this.data[id]
    this.setAll()
    return item
  }
  getAll() {
    this.data = storage.getItem(KEY) || {}
    return this.data
  }
  setAll() {
    storage.setItem(KEY, this.data)
  }
}

export const pageSave = new PageSave()
