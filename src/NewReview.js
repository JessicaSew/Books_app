import React from 'react'
import {Link} from 'react-router-dom'


class NewReview extends React.Component {
    render() {
        return(
          
            <Link to={'/book_reviews/new'}>
                  <br/>
                <button id="reviewBtn">Write a Book Review</button>
            </Link>
        )
    }
}

export default NewReview