import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect  } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';

//IMAGES 
import book1 from './assets/images/gladiators-mid-junior.png';
import book2 from './assets/images/gladiators2star.png';
import book3 from './assets/images/gladiators-nevbie.png';
import book4 from './assets/images/image8.png';

const App = () => {
  const [showShop, setShow] = useState(false);
  const [myBooks, setMyBooks] = useState([]);
  const books = [
    {id: 0, src: {book1}, title: 'Nieprzewidziane i sprawiające problemy testy JS i React', subtitle: 'Zbiór z zaawansowanymi zadaniami na testy z JS i React', price: 120, hashes: ['#hoc', '#hooks', '#javascript', '#junior', '#react', '#redux', '#router']},
    {id: 1, src:{book2}, title: 'Ambitne i wymagające zadania z JS i React', subtitle: 'Zbiór z zaawansowanymi zadaniami z JS i React', price: 120},
    {id: 2, src:{book3}, title: 'Rozwijające i utrwalające zadania z HTML, CSS i JS', subtitle: 'Zbiór zaawansowanych zadań z HTML, CSS i JS', price: 100},
    {id: 3, src:{book4}, title: 'Sprawdź swój poziom, zweryfikuj umiejętności i rozwijaj się dalej z moimi zbiorami!', price: 21},
  ];

  const hideShopHandler = () => {setShow(false)};
  const showShopHandler = (e) => {
    setShow(true);
    const currentBookId = e.target.dataset.num;
    setMyBooks(myBooks => [...myBooks, books[currentBookId * 1]])

  };

  
  let routes = (
    <Switch>
      <Route path="/blog/:id=0" component={Article} />
      <Route path="/blog" component={Blog} />
      <Route path="/" exact component={() => <Home showShop={showShopHandler} />} /> 
      <Redirect to="/" />
    </Switch>
  )

  return(
    <Layout showShop={showShopHandler} show={showShop} hideShop={hideShopHandler} myBooks={myBooks} >
      {routes}
    </Layout>
  )
  
}

export default App;