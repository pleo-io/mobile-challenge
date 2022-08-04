export const color = {
    blue300: '#d2e3f9',
    blue500: '#9cc1f3',
    blue600: '#6da4ed',
    blue700: '#4588e3',
    green300: '#d9f2e1',
    green500: '#ace3bd',
    green600: '#85d69e',
    green700: '#6abe84',
    green800: '#2c8354',
    pink300: '#ffdee2',
    pink400: '#ffc8d0',
    pink500: '#f39ca8',
    pink600: '#dc818e',
    pink700: '#cb727f',
    purple300: '#dcd7f4',
    purple500: '#a69ae3',
    purple600: '#8474d8',
    purple700: '#7363c5',
    red300: '#fecdcd',
    red500: '#fc9090',
    red600: '#fb6060',
    red700: '#ef3939',
    shade000: '#ffffff',
    shade100: '#fafafa',
    shade200: '#f5f5f5',
    shade300: '#ececec',
    shade400: '#cccccc',
    shade500: '#b3b3b3',
    shade600: '#737373',
    shade700: '#333333',
    shade800: '#222222',
    shade900: '#000000',
    yellow300: '#fef6cd',
    yellow400: '#fbefaf',
    yellow500: '#fcea88',
    yellow600: '#fbe360',
    yellow700: '#dfc538'
}

export const applyAlpha = (color: string, alpha: number = 1) => {
    const alphaClamp = Math.min(Math.max(alpha, 0), 1)
    const alpha256 = (alphaClamp * 255).toFixed()
    const alphaBase16 = Number(alpha256).toString(16)
    const alphaPadded = alphaBase16.padStart(2, '0')
    return color.concat(alphaPadded)
}

export function randomColor() {
    const keys = Object.keys(color)
    const randomKey = keys[
        Math.floor(keys.length * Math.random())
    ] as keyof typeof color
    return color[randomKey]
}
