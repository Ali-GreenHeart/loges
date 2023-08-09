import PasswordProtection from "./components/PasswordProtection"
import PlaneSection from "./components/Plane"
import WebRouting from "./routing"

function App() {
  return (
    <>
      <WebRouting />
      <PlaneSection/>
      <PasswordProtection title="Enter Password"/>

    </>
  )
}

export default App
