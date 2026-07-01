// Types
import type { Theme } from '@mui/material/styles'

/**
 * Eleven-stop color ramp keyed by Material Design-style numeric shades.
 * `50` is the lightest tint, `950` the darkest shade.
 */
export interface ColorPalette {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

/** WCI blue */
export const blue: ColorPalette = {
  50: '#d0dbe7',
  100: '#b9cfe4',
  200: '#90b8df',
  300: '#63a1de',
  400: '#338ae1',
  500: '#1573d1',
  600: '#0a5cae',
  700: '#00468b',
  800: '#063665',
  900: '#062441',
  950: '#071c31',
}

/** 1:2 blend of WCI blue and green */
export const cyan: ColorPalette = {
  50: '#cddfe5',
  100: '#b6d7e2',
  200: '#88c8dd',
  300: '#57badb',
  400: '#21afde',
  500: '#1393be',
  600: '#097295',
  700: '#004f6a',
  800: '#053f52',
  900: '#062b38',
  950: '#07232c',
}

/** various WCI grays (saturation: 0, lightness max: 98, lightness min: 0) */
export const gray: ColorPalette = {
  50: '#e9e9e9',
  100: '#d3d3d3',
  200: '#bdbdbd',
  300: '#a8a8a8',
  400: '#939393',
  500: '#7f7f7f',
  600: '#626262',
  700: '#474747',
  800: '#2d2d2d',
  900: '#161616',
  950: '#030303',
}

/** primary green (saturation: -7) */
export const green: ColorPalette = {
  50: '#e1f8de',
  100: '#c2f0be',
  200: '#a2e89c',
  300: '#80df78',
  400: '#57d550',
  500: '#08cb00',
  600: '#059f00',
  700: '#027500',
  800: '#014d00',
  900: '#002900',
  950: '#000900',
}

/** secondary green (saturation: -7) */
export const amber: ColorPalette = {
  50: '#fbe9de',
  100: '#f6d3bd',
  200: '#f0bd9c',
  300: '#e9a77a',
  400: '#e19156',
  500: '#d97a2b',
  600: '#aa5e1f',
  700: '#7d4414',
  800: '#532b0a',
  900: '#2c1403',
  950: '#0b0300',
}

/** 1:1 blend of WCI blue and purple (saturation: -1) */
export const indigo: ColorPalette = {
  50: '#cdd1ea',
  100: '#bdc3e5',
  200: '#9fa8db',
  300: '#7f8cd1',
  400: '#5f6fc9',
  500: '#3f53c0',
  600: '#3344a3',
  700: '#283687',
  800: '#202a65',
  900: '#161c41',
  950: '#10142e',
}

/** WCI orange (saturation: -3, lightness max: 95, lightness min: 0) */
export const orange: ColorPalette = {
  50: '#fce5d9',
  100: '#fbd7c6',
  200: '#f9c7ae',
  300: '#f7b092',
  400: '#f49971',
  500: '#f08456',
  600: '#f37044',
  700: '#f15a29',
  800: '#aa3812',
  900: '#511c0b',
  950: '#270f06',
}

/** 1:1 blend of WCI red and white (saturation: 0) */
export const pink: ColorPalette = {
  50: '#fae8e7',
  100: '#ecd9d7',
  200: '#e4c6c4',
  300: '#ddb8b6',
  400: '#d7aba8',
  500: '#d2a19d',
  600: '#cb9490',
  700: '#c58782',
  800: '#9d4e49',
  900: '#5e2f2c',
  950: '#3b1e1b',
}

/** WCI purple (saturation: -3) */
export const purple: ColorPalette = {
  50: '#dbd2e4',
  100: '#d0c7db',
  200: '#baaacf',
  300: '#a48bc6',
  400: '#8c67bc',
  500: '#7646b4',
  600: '#62369b',
  700: '#4f2683',
  800: '#3c215e',
  900: '#26173b',
  950: '#1d132b',
}

/** WCI red (saturation: -6) */
export const red: ColorPalette = {
  50: '#f4d2d2',
  100: '#e4b9b9',
  200: '#d89793',
  300: '#d2766f',
  400: '#d54d43',
  500: '#ca2c20',
  600: '#ab1c12',
  700: '#8b0e04',
  800: '#61100a',
  900: '#420e0b',
  950: '#2e0d0a',
}

/** 1:1 blend of WCI blue and green (saturation: -7) */
export const teal: ColorPalette = {
  50: '#d1dde0',
  100: '#c1d6d7',
  200: '#93cacd',
  300: '#61c6cc',
  400: '#2dc5cd',
  500: '#18a2aa',
  600: '#0b7e84',
  700: '#005459',
  800: '#053f42',
  900: '#072f31',
  950: '#09282a',
}

/** WCI yellow (saturation: 0, lightness max: 97, lightness minimum: 0) */
export const yellow: ColorPalette = {
  50: '#fbf1e4',
  100: '#faead7',
  200: '#f5dab7',
  300: '#f2cd9c',
  400: '#eebd7d',
  500: '#eaaf62',
  600: '#e69f42',
  700: '#e28f26',
  800: '#9d6215',
  900: '#4c300a',
  950: '#281905',
}

/** WCI body text */
export const body = gray[900]

/** WCI border color */
export function border(theme?: Theme): string {
  return theme?.palette.mode === 'dark' ? gray[900] : gray[300]
}

/** Bootstrap-like theme color for subtle content */
export const muted = gray[500]

/**
 * MUI palette slot names available on this theme — six stock semantic slots
 * plus the custom `dark` / `light` slots augmented in `src/types/theme.ts`.
 */
export const paletteColors = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
  'dark',
  'light',
] as const
