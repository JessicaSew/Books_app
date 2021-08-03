import React from 'react'

class ReviewForm extends React.Component {
    constructor(){
        super()
        this.state = {
            new_review: ''
        }
    }

handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value})
}

handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/book_reviews', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            new_review: this.state.new_review
        })
    }).then(response => response.json())
      .then(review => this.props.addReview(review))
      e.target.reset()
}

    render(){
        return(
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Review: </label>
                    <textarea type="text" name="new_review" onChange={this.handleChange}></textarea>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


export default ReviewForm