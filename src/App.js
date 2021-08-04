import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import Books from './Books'
import NavBar from './NavBar'
import BookReviews from './BookReviews'
import ReviewForm from './ReviewForm'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
       book_reviews: []
    }
}

componentDidMount() {
    fetch('http://localhost:3000/book_reviews/')
    .then(response =>response.json())
    .then(book_reviews => this.setState({book_reviews}))
}

addReview = (review) => {
this.setState({
  book_reviews: [...this.state.book_reviews, review] 
    })
  }
  render() {
   return (
    <Router> 
     <div className="App">
      
      <NavBar/>
      <br/>
      <Switch>
        <Route exact path='/' component={Books}/>
        <Route exact path='/book_reviews' render={() => <BookReviews book_reviews={this.state.book_reviews}/>}/>
        <Route exact path='/book_reviews/new' render={() => <ReviewForm addReview={this.addReview}/>}/>
      </Switch>
      
     </div>
    </Router>
    
  );
  }
}

export default App;
