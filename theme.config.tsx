import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SHIFA" />
      <meta property="og:description" content="Decentralized Healthcare" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  logo: <span>SHIFA</span>,
  project: {
    link: 'https://github.com/SHIFA-HEALTHCARE',
  },
  docsRepositoryBase: 'https://github.com/SHIFA-HEALTHCARE/SHIFA-DOCS',
  footer: {
    text: 'SHIFA LLC',
  },
}

export default config
