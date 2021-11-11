import Main from "./components/Main"
import Modal from "./components/Modal"
import {useState} from "react"
function App() {
  const [modal, set_modal] = useState(false)

  const modalClose = () => set_modal(false)
  const modalOpen = () => set_modal(true)

  return (
    <div className="App">
      <Main modalOpen={modalOpen} modalIsOpen={modal} />
      <Modal close={modalClose} isOpen={modal} />
    </div>
  );
}

export default App;
