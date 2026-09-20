// Learn how to customize the theme: https://rspress.rs/guide/basic/custom-theme
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Layout as BasicLayout } from '@rspress/core/theme-original'

import '@mantine/core/styles.css'
import './globals.css'

function Layout() {
  return (
    <MantineProvider forceColorScheme="dark">
      <ColorSchemeScript forceColorScheme="dark" />
      <BasicLayout />
    </MantineProvider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@rspress/core/theme-original'
export { Layout }
