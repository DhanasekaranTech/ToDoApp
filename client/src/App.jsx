
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task from './Task';


function App() {
return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Task/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
