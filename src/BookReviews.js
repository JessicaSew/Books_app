import React from 'react';
import Reviews from './Reviews'
import NewReview from './NewReview'

class BookReviews extends React.Component {
 render() {
    const reviews = this.props.book_reviews.map(review => <Reviews review={review} /> )
    return(
        <div>
            {reviews}
            <NewReview />
        </div>
    )
}




}



export default BookReviews