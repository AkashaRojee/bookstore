import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../features/header/Header';
import Books from '../features/books/Books';
import Categories from '../features/categories/Categories';
import './scss/styles.scss';

function App() {
  return (
    <BrowserRouter basename="/bookstore">
      <Header />
      <Switch>
        <Route path="/">
          <Books />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
