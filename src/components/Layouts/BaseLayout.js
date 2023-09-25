import React from "react";
import Header from "./Header";

export default function BaseLayout({children}) {
  return(
    <div className={"min-h-screen bg-base dark:bg-drk-base dark:text-drk-txt-base"}>
      <Header/>
      {children}
    </div>
  )
}