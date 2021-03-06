import { writeFileSync } from 'fs'
import { EOL } from 'os'
import { join } from 'path'
import { getPackages, rootDirectory } from './common'

if (process.mainModule === module) {
  updateCodeWorkspace()
}

export function updateCodeWorkspace() {
  const workspaceFile = join(rootDirectory, 'typed.code-workspace')
  const folders: { name: string; path: string }[] = [
    ...getPackages().map((pkg) => {
      return {
        name: getPkgName(pkg),
        path: `./packages/${pkg}`,
      }
    }),
    { name: 'Documentation', path: './documentation' },
    { name: 'Examples', path: './examples' },
    { name: 'Tools', path: './tools' },
    { name: 'Typed Prelude', path: './' },
  ]

  writeFileSync(workspaceFile, JSON.stringify({ folders }, null, 2) + EOL)

  function getPkgName(pkg: string) {
    return capitalize(pkg.split('-').join(' '))
  }

  function capitalize(str: string): string {
    return capitalizeFirst(str.split(' ').map(capitalizeFirst).join(' '))
  }

  function capitalizeFirst(str: string): string {
    if (str && str[0]) {
      return str[0].toUpperCase() + str.slice(1)
    }

    return str
  }
}
