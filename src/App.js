import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList'
import fantasyBooks from './data/fantasyBooks.json'
import MyNav from './components/MyNav' 
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Form from './components/Form'

function App() {
  return (
    <Router>
    <div className="App">
       
        
        <MyNav />
        <Route path="/Register" exact component={<Form />} />
        <BookList />

    </div>
    </Router>
    
  )
}

export default App