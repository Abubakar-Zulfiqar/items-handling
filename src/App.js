import { Routes, Route } from 'react-router-dom'

import Create from './Components/Create'
import Form from './Components/Form'
import User from './Components/User'
import View from './Components/View'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Create />} />
        <Route exact path='/view' element={<View />} />
        <Route exact path='/view' element={<User />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
