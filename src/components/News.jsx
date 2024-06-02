import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super()
        console.log("i am the constructor")
        this.state = {
            articles:[],
            loading:false,
            page:1
        }
    }



    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=efc441b1b63e4be282de04aa6e6b766a&pageSize=${this.props.pageSize}&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }

    handlePrevClick = async () =>{
         console.log("Previous")

        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=efc441b1b63e4be282de04aa6e6b766a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles:parsedData.articles,
            page: this.state.page - 1
        })
    }

    handleNextClick = async() =>{
        console.log("Next")

        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=efc441b1b63e4be282de04aa6e6b766a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                articles:parsedData.articles,
                page: this.state.page + 1
            })
        }

        // let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=efc441b1b63e4be282de04aa6e6b766a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();

        // this.setState({
        //     articles:parsedData.articles,
        //     page: this.state.page + 1
        // })
    }

    render() {
     return (
      <div className='container my-3'>
        <h1 className='text-center'>FlashNews - Top Headlines </h1>
        
        <div className='row'>
               {this.state.articles.map((element) => {return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb"} newsUrl={element.url}/>
            </div>})}
            
        </div>
        <div className='container d-flex justify-content-between'>    
            <button disabled={this.state.page<=1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}> &larr; Previous </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
