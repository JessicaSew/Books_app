import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Books from './Books'
import NavBar from './NavBar'
import BookReviews from './BookReviews'
import ReviewForm from './ReviewForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
       book_reviews: [],
       searchTerm: ''
    }
}

  componentDidMount() {
    console.log(this.state)
      fetch('http://localhost:3000/book_reviews/')
      .then(response =>response.json())
      .then(book_reviews => { 
        this.setState({book_reviews})})     
          }

  addReview = (review) => {
  this.setState({
    book_reviews: [...this.state.book_reviews, review] 
      })
    }

  handleSubmit = (e) => {
    e.preventDefault()
    let books = this.props.book.filter((book) => book.title.toLowerCase() === e.target.children[0].value.toLowerCase())
    this.setState({...this.state, books: books})
    console.log(this.state.searchTerm)
  }

  render() {
   return ( 
     <div>
      <Router> 
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Books}/>
          <Route exact path='/book_reviews' render={() => <BookReviews book_reviews={this.state.book_reviews}/>}/>
          <Route exact path='/book_reviews/new' render={() => <ReviewForm addReview={this.addReview}/>}/>
        </Switch>  
      </div>
      </Router>
    </div>
  )}
}

export default App;
