import React from 'react';

class Reviews extends React.Component {

    render() {
        return ( 
            
            <p id="pTag">
              {this.props.review.new_review}
            </p>
           
        )
    }

}

export default Reviews