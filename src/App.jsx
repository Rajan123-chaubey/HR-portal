
import './App.css'
import Sidebar from './components/leftsidebars/Sidebar'
import { MainContent } from './components/MainComponent'
import { RightSidebar } from './components/rightsidebars/RightSidebar'

function App() {

  return (
    <div className="flex justify-between">
    <Sidebar />
    <MainContent />
    <RightSidebar />
  </div>
  )
}

export default App
