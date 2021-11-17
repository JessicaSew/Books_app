import React from 'react'
import {Link} from 'react-router-dom'

const NewReview = () => {
    return(
        <Link to={'/book_reviews/new'}>
            <br/>
            <button id="reviewBtn">Write a Book Review</button>
        </Link>
        )  
    }

export default NewReview