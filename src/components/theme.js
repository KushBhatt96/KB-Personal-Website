import React from "react"
import ThemeTop from "./../components/themeTop"
import ThemeBottom from "../components/themeBottom"

const Theme = props => {
  return (
    <div className="inner-background">
      <ThemeTop title={props.title} />
      {props.children}
      <ThemeBottom />
    </div>
  )
}

export default Theme
