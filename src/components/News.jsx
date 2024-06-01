import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Chirag Sehgal",
            "title": "Malaika Arora BREAKS SILENCE On Arjun Kapoor Breakup Rumours: 'No, No...' - News18",
            "description": "Rumours of Malaika and Arjun's breakup made headlines earlier today after a report claimed that the couple, who made their relationship official in 2019, have amicably parted ways.",
            "url": "https://www.news18.com/movies/malaika-arora-breaks-silence-on-arjun-kapoor-breakup-rumours-no-no-8912274.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/05/fotojet-2024-05-31t130756.174-2024-05-c8e335026c857c765bc2d3f31c088151-16x9.jpg?impolicy=website&width=1200&height=675",
            "publishedAt": "2024-05-31T16:35:28Z",
            "content": "Malaika Arora has finally shut down her breakup rumours with Arjun Kapoor. The divas manager has confirmed that she is still dating Kapoor and that the reports claiming they have parted ways are fals… [+2023 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBCTV18"
            },
            "author": "https://www.cnbctv18.com",
            "title": "NASA shares rare images of most distant known galaxy captured by James Webb Telescope - CNBCTV18",
            "description": "JADES-GS-z14-0, the most distant known galaxy from earth, is known for its exceptional size and brightness, measuring over 1,600 light-years in diameter.",
            "url": "https://www.cnbctv18.com/world/nasa-shares-rare-images-most-distant-known-galaxy-captured-james-webb-telescope-19421246.htm",
            "urlToImage": "https://images.cnbctv18.com/uploads/2024/05/jades-gs-z14-0-2024-05-329de6d754b4bb38edc60f067dc4a04e.jpg?im=FitAndFill,width=500,height=300",
            "publishedAt": "2024-05-31T16:16:06Z",
            "content": "The National Aeronautics and Space Administration (NASA) has shared rare pictures of the most distant known galaxy from earth. These images were captured by the James Webb Space Telescope. The newly … [+2787 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"False\": Temple Trustee On DK Shivakumar's 'Black Magic' Ritual Claim - NDTV",
            "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
            "url": "https://www.ndtv.com",
            "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
            "publishedAt": "2024-05-31T15:11:42Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "India Unhappy With Facilities Offered In The US For T20 World Cup?| First Sports With Rupha Ramani - Firstpost",
            "description": "India Unhappy With Facilities Offered In The US For T20 World Cup? | First Sports With Rupha RamaniIndia begin their T20 World Cup preparations with practice...",
            "url": "https://www.youtube.com/watch?v=QtAsdztBtKU",
            "urlToImage": "https://i.ytimg.com/vi/QtAsdztBtKU/maxresdefault.jpg",
            "publishedAt": "2024-05-31T14:57:09Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "RBI Brings Back 100 Tonnes Of Gold Reserves From UK Vaults | Lok Sabha Elections 2024 | News18 - CNN-News18",
            "description": "RBI Brings Back 100 Tonnes Of Gold Reserves From UK Vaults | Lok Sabha Elections 2024 | News18In an about-turn from the economic liberalisation days of 1991 ...",
            "url": "https://www.youtube.com/watch?v=JXAbXZfKdf4",
            "urlToImage": "https://i.ytimg.com/vi/JXAbXZfKdf4/maxresdefault.jpg",
            "publishedAt": "2024-05-31T14:41:43Z",
            "content": null
        }
    ]
    constructor(){
        super()
        console.log("i am the constructor")
        this.state = {
            articles:this.articles,
            loading:true
        }
    }
    render() {
     return (
      <div className='container my-3'>
        <h2>FlashNews - Top Headlines </h2>
        <div className='row'>
            <div className='col-md-4'>
                <NewsItem title="title" desc="fbtftfth" imgurl="https://images.news18.com/ibnlive/uploads/2024/05/fotojet-2024-05-31t130756.174-2024-05-c8e335026c857c765bc2d3f31c088151-16x9.jpg?impolicy=website&width=1200&height=675"/>
            </div>
            <div className='col-md-4'>
                <NewsItem title="title" desc="fbtftfth"/>
            </div>
            <div className='col-md-4'>
                <NewsItem title="title" desc="fbtftfth"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
