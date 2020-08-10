import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { YouTube, Gist } from "@blocks/kit"
const shortcodes = { YouTube, Gist }
export default ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)
