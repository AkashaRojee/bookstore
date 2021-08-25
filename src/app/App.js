import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../common/Header';
import Books from '../features/books/Books';
import Categories from '../features/categories/Categories';

function App() {
  return (
    <BrowserRouter basename="/bookstore">
      <Header />
      <Switch>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
