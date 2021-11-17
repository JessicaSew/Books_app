import React from 'react';
import Book from './Book'


const API_KEY = process.env.REACT_APP_API_KEY
const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`

class Books extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            books: []
        }
    }
    
componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(data => 
        this.setState({
            books: data.results.books    
        })   
    ) 
}
render() {
    return (
        <div> 
            <h1 id="header" className="font-bold text-center text-4xl py-5 lg:text-6xl">The Best-Seller Books</h1>
            <section id='section' className="grid grid-cols-1 gap-10 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {this.state.books.map((book) => {
                const {
                author,
                book_image, 
                buy_links,
                description, 
                rank,
                title, 
                primary_isbn10, 
                publisher
                    } = book               
        return(
            <Book id="BookContainer" author={author} book_image={book_image} title={title} description={description} 
            rank={rank} primary_isbn10={primary_isbn10} publisher={publisher} buy_links={buy_links}/>
              )
            }
          )}  
        </section>
     </div>
  )}
}

export default Books