import React from "react"
import './reset.css'
import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default ({ children }) => <div>{children}</div>