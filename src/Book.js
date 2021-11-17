import React from 'react'
import {BiLinkExternal} from 'react-icons/bi'

class Book extends React.Component {

render(){
    return (
    <article key={this.props.rank} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
        <>
             <img src={this.props.book_image} alt={this.props.title} className="block mx-auto w-1/2"/>
                <br/>
             <h3 className="font-bold my-2 text- 2x1">{this.props.title}</h3>
             <p className="mb-4">{this.props.description}</p>
             <p>
                 <span className="font-bold"> Author: </span> 
                 {this.props.author}
            </p>
                 <ul className="mb-4">
                    <li>
                        <span className="font-bold">Publisher: </span>
                        {this.props.publisher}
                    </li>
                    <li>
                        <span className="font-bold">ISBN: </span>
                        {this.props.primary_isbn10}
                    </li>
                 </ul>
                <ul>
                <h4 className="font-bold text-xl">Buy Now:</h4>
                {this.props.buy_links.map((link) => {
                const {name, url} = link 
                    return (
                        <div key={name}>
                            <a href={url} className="flex items-center" target="_blank" rel="noopener noreferrer">
                                {name} <BiLinkExternal className="ml-1"/></a>
                        </div>
                    )}
                )}
                </ul>
        </>
    </article>
    )}
}

export default Book 