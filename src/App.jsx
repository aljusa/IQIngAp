import { useState } from "react"

import Lesson1App from "./components/Lesson1"
import Lesson2App from "./components/Lesson2"
import Lesson3App from "./components/Lesson3"
import Lesson4App from "./components/Lesson4"
import Lesson5App from "./components/Lesson5"
import Lesson6App from "./components/Lesson6"
import Lesson7App from "./components/Lesson7"
import Lesson8App from "./components/Lesson8"
import Lesson9App from "./components/Lesson9"
import Lesson10App from "./components/Lessson10"

function App() {
  const [selectedApp, setSelectedApp] = useState("Lesson1")

  const renderApp = () => {
    switch (selectedApp) {
      case "Lesson1":
        return <Lesson1App />
      case "Lesson2":
        return <Lesson2App />
      case "Lesson3":
        return <Lesson3App />
      case "Lesson4":
        return <Lesson4App />
      case "Lesson5":
        return <Lesson5App />
      case "Lesson6":
        return <Lesson6App />
      case "Lesson7":
        return <Lesson7App />
      case "Lesson8":
        return <Lesson8App />
      case "Lesson9":
        return <Lesson9App />
      case "Lesson10":
        return <Lesson10App />
      default:
        return null
    }
  }

  return (
    <div>
      <select
        value={selectedApp}
        onChange={(e) => setSelectedApp(e.target.value)}
      >
        <option value="Lesson1">Lesson 1</option>
        <option value="Lesson2">Lesson 2</option>
        <option value="Lesson3">Lesson 3</option>
        <option value="Lesson4">Lesson 4</option>
        <option value="Lesson5">Lesson 5</option>
        <option value="Lesson6">Lesson 6</option>
        <option value="Lesson7">Lesson 7</option>
        <option value="Lesson8">Lesson 8</option>
        <option value="Lesson9">Lesson 9</option>
        <option value="Lesson10">Lesson 10</option>
      </select>

      <hr />

      {renderApp()}
    </div>
  )
}

export default App

