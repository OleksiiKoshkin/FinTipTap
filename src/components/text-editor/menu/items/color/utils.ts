// from https://stackoverflow.com/a/3627747/5433572
// and https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function rgbStyleToHex(color: string | null): string | null {
  if (!color || color.indexOf('rgb') < 0) {
    return color
  }

  if (color.charAt(0) === '#') {
    return color
  }

  const nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
    r = parseInt(nums![2], 10).toString(16),
    g = parseInt(nums![3], 10).toString(16),
    b = parseInt(nums![4], 10).toString(16)

  return (
    '#' +
    ((r.length === 1 ? '0' + r : r) +
      (g.length === 1 ? '0' + g : g) +
      (b.length === 1 ? '0' + b : b))
  ).toLowerCase()
}
