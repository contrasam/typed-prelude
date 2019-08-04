export function toCamelCase(str: string = ''): string {
  return hasHyphen(str)
    ? str
        .toLowerCase()
        .split('-')
        .reduce(camelCasePart, '')
    : str.toLowerCase()
}

function camelCasePart(out: string, part: string): string {
  return out ? out + part.charAt(0).toUpperCase() + part.slice(1) : part
}

function hasHyphen(str: string): boolean {
  return str.indexOf('-') === -1
}
