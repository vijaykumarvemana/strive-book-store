import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import books from './data/fantasy.json'
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <WarningSign text="best world's booksite" color="danger" />
          <MyBadge title="something new" color="warning" />
          <SingleBook book={books[0]} />
          <BookList books={books} />
        </div>
      </header>
    </div>
  );
}

export default App;

/*
TASKS

Pair Programming - State & Props
PAIR PROGRAMMING EXERCISE. 1 DRIVER, 1 NAVIGATOR.
1 Exercise each. Use GitHub to share the code.
Starting by creating a new React app by using the command create-react-app.
Include into your project bootstrap + react-bootstrap
1. Create a component called WarningSign which receives some text as a prop. This text should be presented inside an Alert of type danger.
2. Create a component called MyBadge which receives a text and a color as props. This component should render a Badge react-bootstrap component with those properties.
3. Create a SingleBook component as a function. The component receives a book object as a prop, and displays the cover and the title of the book. Use react-bootstrap Cards to display a book (The book object can be read from one of the .json book files we gave you yesterday).
4. Create a BookList component. This component receives by props a list of books and displays them using the SingleBook component.
5. Create a FilterBookList feature. By writing into an input field a search query, the BookList should show only the books with the specified string into the title (save the query into the BookList component state and filter the books accordingly).
6. Convert your SingleBook component to a class, and create its state containing a 'selected' boolean property.
7. Clicking on a SingleBook should toggle its 'selected' state property. If the 'selected' property is true, the SingleBook should have some styling that reflects that state change, visually.
8. Push everything on GitHub and publish it on Eduflow before 17:00 CET.
*/
