import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  formatters: true,

}, {
  rules: {
    'dot-notation': 'off',
  },
})
