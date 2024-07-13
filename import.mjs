import { tsImport } from 'tsx/esm/api'

const mod = await tsImport('./mod.ts', import.meta.url)

console.log(mod)
