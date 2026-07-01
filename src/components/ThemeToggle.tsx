import { useColorScheme } from '@mui/material/styles'

type ThemeMode = 'light' | 'dark' | 'system'

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme()

  function toggleMode() {
    const nextMode: ThemeMode =
      mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light'

    setMode(nextMode)
  }

  const currentMode = mode ?? 'system'
  const label =
    currentMode === 'system'
      ? 'Theme mode: system. Click to switch to light mode.'
      : `Theme mode: ${currentMode}. Click to switch mode.`

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={label}
      title={label}
      className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--sea-ink)] shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5"
    >
      {currentMode === 'system'
        ? 'Auto'
        : currentMode === 'dark'
          ? 'Dark'
          : 'Light'}
    </button>
  )
}
