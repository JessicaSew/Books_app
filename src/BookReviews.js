import React from 'react';
import Reviews from './Reviews'
import NewReview from './NewReview'

function BookReviews() {
 
    const reviews = this.props.book_reviews.map(review => <Reviews review={review} /> )
    return(
        <div>
            {reviews}
            <NewReview />
        </div>
    )
}



export default BookReviews