import React from 'react';

const API_KEY = 'UoRKKA7wnvKbrtHgW1XpAW2FbHHQhFb7'
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
            <h1 id="header">The Best-Seller Books</h1>
            <section id='section'>
                {this.state.books.map((book) => {
                  const {
                    author,book_image, description, rank, title, primary_isbn10, publisher
                        } = book
               
            return(<article key={rank}>
                <>
                    <img src={book_image} alt={title}/>
                    <br/>
                    <h3>{title}</h3>
                    <p>Author: {author}</p>
                    <p>{description}</p>
                  <ul>
                    <li>Publisher: {publisher}</li>
                    <li>ISBN: {primary_isbn10}</li>
                  </ul>
                </>
                </article>
                        )
                    }
                )}  
            </section>
        </div>
        )
    }
}








export default Books