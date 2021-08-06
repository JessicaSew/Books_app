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
      // if (this.state.searchTerm !== '') {
      //   book_reviews = book_reviews.filter((book) => book.title.toLowerCase() === this.state.searchTerm.toLowerCase())
      //   console.log(book_reviews)
      // }
      this.setState({book_reviews})})
      
}

addReview = (review) => {
this.setState({
  book_reviews: [...this.state.book_reviews, review] 
    })
  }

  handleSubmit = (e) => {
    // debugger
    e.preventDefault()
    let books = this.props.book.filter((book) => book.title.toLowerCase() === e.target.children[0].value.toLowerCase())
    this.setState({...this.state, books: books})
    console.log(this.state.searchTerm)
    // console.log('submitted')
  }


  render() {
   return (
     
    <div>
      
     
    <Router> 
     <div className="App">
     
      <NavBar/>
        <br/>
        <form onSubmit={this.handleSubmit} >
        <input className="searchBar" type="text" placeholder="Search" ></input>
        <button type="submit" id="seearchBtn">Search Button</button>
        
      </form>
      <br/>
      <Switch>
        <Route exact path='/' component={Books}/>
        <Route exact path='/book_reviews' render={() => <BookReviews book_reviews={this.state.book_reviews}/>}/>
        <Route exact path='/book_reviews/new' render={() => <ReviewForm addReview={this.addReview}/>}/>
      </Switch>
      
     </div>
    </Router>
    </div>
  );
  }
}

export default App;
