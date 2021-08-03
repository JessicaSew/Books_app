import React from 'react'

class Book extends React.Component {

render(){
    return(
    <article key={this.props.rank}>
        <>
                <img src={this.props.book_image} alt={this.props.title}/>
                <br/>
                <h3>{this.props.title}</h3>
                <p>Author: {this.props.author}</p>
                <p>{this.props.description}</p>
            <ul>
                <li>Publisher: {this.props.publisher}</li>
                <li>ISBN: {this.props.primary_isbn10}</li>
            </ul>
        </>
    </article>
    )
}

}

export default Book 