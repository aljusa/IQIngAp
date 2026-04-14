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
import Lesson10App from "./components/Lesson10"
import Lesson11App from "./components/Lesson11"
import Lesson12App from "./components/Lesson12"
import Lesson13App from "./components/Lesson13"
import Lesson14App from "./components/Lesson14"
import Lesson15App from "./components/Lesson15"
import Lesson16App from "./components/Lesson16"
import Lesson17App from "./components/Lesson17"
import Lesson18App from "./components/Lesson18"
import Lesson19App from "./components/Lesson19"
import Lesson20App from "./components/Lesson20"
import Lesson21App from "./components/Lesson21"
import Lesson22App from "./components/Lesson22"
import Lesson23App from "./components/Lesson23"
import Lesson24App from "./components/Lesson24"
import Lesson25App from "./components/Lesson25"
import Lesson26App from "./components/Lesson26"
import Lesson27App from "./components/Lesson27"
import Lesson28App from "./components/Lesson28"
import Lesson29App from "./components/Lesson29"
import Lesson30App from "./components/Lesson30"
import Lesson31App from "./components/Lesson31"
import Lesson32App from "./components/Lesson32"
import Lesson33App from "./components/Lesson33"
import Lesson34App from "./components/Lesson34"
import Lesson35App from "./components/Lesson35"
import Lesson36App from "./components/Lesson36"
import Lesson37App from "./components/Lesson37"
import Lesson38App from "./components/Lesson38"
import Lesson39App from "./components/Lesson39"
import Lesson40App from "./components/Lesson40"
import Lesson41App from "./components/Lesson41"
import Lesson42App from "./components/Lesson42"
import Lesson43App from "./components/Lesson43"
import Lesson44App from "./components/Lesson44"
import Lesson45App from "./components/Lesson45"

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
      case "Lesson11":
        return <Lesson11App />
      case "Lesson12":
        return <Lesson12App />
      case "Lesson13":
        return <Lesson13App />
      case "Lesson14":
        return <Lesson14App />
      case "Lesson15":
        return <Lesson15App />
      case "Lesson16":
        return <Lesson16App />
      case "Lesson17":
        return <Lesson17App />
      case "Lesson18":
        return <Lesson18App />
      case "Lesson19":
        return <Lesson19App />
      case "Lesson20":
        return <Lesson20App />
      case "Lesson21":
        return <Lesson21App />
      case "Lesson22":
        return <Lesson22App />
      case "Lesson23":
        return <Lesson23App />
      case "Lesson24":
        return <Lesson24App />
      case "Lesson25":
        return <Lesson25App />
      case "Lesson26":
        return <Lesson26App />
      case "Lesson27":
        return <Lesson27App />
      case "Lesson28":
        return <Lesson28App />
      case "Lesson29":
        return <Lesson29App />
      case "Lesson30":
        return <Lesson30App />
      case "Lesson31":
        return <Lesson31App />
      case "Lesson32":
        return <Lesson32App />
      case "Lesson33":
        return <Lesson33App />
      case "Lesson34":
        return <Lesson34App />
      case "Lesson35":
        return <Lesson35App />
      case "Lesson36":
        return <Lesson36App />
      case "Lesson37":
        return <Lesson37App />
      case "Lesson38":
        return <Lesson38App />
      case "Lesson39":
        return <Lesson39App />
      case "Lesson40":
        return <Lesson40App />
      case "Lesson41":
        return <Lesson41App />
      case "Lesson42":
        return <Lesson42App />
      case "Lesson43":
        return <Lesson43App />
      case "Lesson44":
        return <Lesson44App />
      case "Lesson45":
        return <Lesson45App />
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
        <option value="Lesson11">Lesson 11</option>
                <option value="Lesson12">Lesson 12</option>
        <option value="Lesson13">Lesson 13</option>
        <option value="Lesson14">Lesson 14</option>
        <option value="Lesson15">Lesson 15</option>
        <option value="Lesson16">Lesson 16</option>
        <option value="Lesson17">Lesson 17</option>
        <option value="Lesson18">Lesson 18</option>
        <option value="Lesson19">Lesson 19</option>
        <option value="Lesson20">Lesson 20</option>
     <option value="Lesson21">Lesson 21</option>
                <option value="Lesson22">Lesson 22</option>
        <option value="Lesson23">Lesson 23</option>
        <option value="Lesson24">Lesson 24</option>
        <option value="Lesson25">Lesson 25</option>
        <option value="Lesson26">Lesson 26</option>
        <option value="Lesson27">Lesson 27</option>
        <option value="Lesson28">Lesson 28</option>
        <option value="Lesson29">Lesson 29</option>
        <option value="Lesson30">Lesson 30</option>
        <option value="Lesson31">Lesson 31</option>
        <option value="Lesson32">Lesson 32</option>
        {/* <option value="Lesson33">Lesson 33</option>
        <option value="Lesson34">Lesson 34</option>
        <option value="Lesson35">Lesson 35</option>
        <option value="Lesson36">Lesson 36</option>
        <option value="Lesson37">Lesson 37</option>
        <option value="Lesson38">Lesson 38</option>
        <option value="Lesson39">Lesson 39</option>
        <option value="Lesson40">Lesson 40</option>
        <option value="Lesson41">Lesson 41</option>
        <option value="Lesson42">Lesson 42</option>
        <option value="Lesson43">Lesson 43</option>
        <option value="Lesson44">Lesson 44</option>
        <option value="Lesson45">Lesson 45</option> */}

      </select>

      <hr />

      {renderApp()}
    </div>
  )
}

export default App

