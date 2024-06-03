import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,desc,imgurl,newsUrl} = this.props;
    return (
      <div>
        
        {/* i'm using a card to show the image related to news with title and description and when the user click on the 'Read More;
            they will be redirected to the page where the whole news is available and passing the props for title,description,imgurl and url 
            to dynamically update the card content */}

           <div className="card" >
            <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
