import { FC } from 'react'
import './App.css'
// import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
// import DetailPage from './pages/DetailPage'

// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App: FC = () => {
  return (
    <>
    <Homepage />
      {/* <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/pokemon/:name' element={<DetailPage />} />
      </Routes> */}

    </>
  )
}

export default App





















// function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  // return (
    // <div>
      {/* Start the development here */}
      {/* Use react-router-dom Expected routes:  */}
      {/* 1. Home path: "/" */}
      {/* 1. Details path: "/details:" */}
    // </div>
  // )
// }


