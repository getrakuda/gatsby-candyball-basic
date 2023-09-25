import React, {useEffect} from "react";
import BaseLayout from "../components/Layouts/BaseLayout";
import ThemeToggleButton from "../components/Buttons/ThemeToggleButton";

export default function Home(){

  useEffect(() => {
    if (document.documentElement.classList.value !== "dark") {
      document.documentElement.classList.toggle("dark")
    }
  })

  return (
    <BaseLayout>
      <ThemeToggleButton />
    </BaseLayout>
  )
}