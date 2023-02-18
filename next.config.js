const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    loader: 'imgix',
    path: '/',
  }
})

module.exports = withNextra()
