import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const ReviewForm = (props) => {
  const [new_review, setNewReview] = useState('');

    let history = useHistory()

    const handleChange = (e) => {
    setNewReview(e.target.value)
    }

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/book_reviews', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            new_review
        }) 
    }).then(response => response.json())
      .then(review => props.addReview(review))
      e.target.reset()  
      history.push('/book_reviews')    
} 
    return (
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Review: </label>
                <textarea type="text" name="new_review" onChange={handleChange}></textarea>
                <input type="submit"/>
            </form>
        </div>
    )   
}


export default ReviewForm