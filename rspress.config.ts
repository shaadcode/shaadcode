import * as path from 'node:path'
import { defineConfig } from '@rspress/core'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Shaadcode',
  description: 'I just like to build big things...',
  lang: 'en',
  icon: '/mojtaba-profile.png',
  base: '/shaadcode/',
  search: false,
  locales: [
    {
      lang: 'en',
      label: 'English',
    },
  ],
  themeConfig: {
    darkMode: 'force-dark',
    search: false,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/shaadcode',
      },
    ],
  },
})
