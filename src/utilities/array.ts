export function groupByN<T>(n: number, data: T[]): T[][] {
  let result = []
  for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n))
  return result
}
