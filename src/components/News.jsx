import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
    
    // Default properties for the News component

    static defaultProps = {
        country:'in',                // Default country code is 'in' (India)
        pageSize:5,                  // Default page size is 5 articles per page
        category:'general',          // Default category is 'general'
    };
    
    // Prop types for validation

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor(){
        super();

        this.state = {
            articles:[],            // Array to hold the articles fetched from the API
            loading:false,          // Loading state to show spinner while fetching data
            page:1                  // Current page number
        }
    }

    // The componentDidMount fetches data from API and async will ensure that function returns a promise and await is used to wait 
    //  till the promise is resolved, once the promise 
    // is resolved and data is fetched,it will execute next instructions,otherwise it will wait till it is not resolved 
    

    async componentDidMount(){
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efc441b1b63e4be282de04aa6e6b766a&pageSize=${this.props.pageSize}&page=1`;
        
        // While the API is fetching data, a loading gif will be shown to the user.Hence it's state is true.
        // Once the articles are fetched, the state of the loading will be set to false.
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false                            // Set loading to false after data is fetched
        })
    }
    
    // This method is made to handle the request when the user click on "Previous" button. It will fetch and show the news of 
    // previous page and also update the state accordingly.

    handlePrevClick = async () =>{
         console.log("Previous")

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efc441b1b63e4be282de04aa6e6b766a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        
        // While the API is fetching data, a loading gif will be shown to the user.Hence it's state is true.
        // Once the articles are fetched, the state of the loading will be set to false.

        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles:parsedData.articles,
            loading:false                            // Set loading to false after data is fetched
        })
    }

    // This method is made to handle the request when the user click on "Next" button. It will fetch and show the news of next page
    // and also update the state accordingly.

    handleNextClick = async() =>{
        console.log("Next")

        // if statement is set to ensure that it will fetch data for next page only when next page is less than or equal to the number
        // of possible pages.

        if(this.state.page + 1 <= Math.ceil(this.state.totalResults/this.props.pageSize)){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efc441b1b63e4be282de04aa6e6b766a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            
         // While the API is fetching data, a loading gif will be shown to the user.Hence it's state is true.
         // Once the articles are fetched, the state of the loading will be set to false.
         
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles:parsedData.articles,
                loading:false                           // Set loading to false after data is fetched
            })
        }
        

    }

    render() {
     return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: "35px"}}>FlashNews - Top Headlines </h1>

        {this.state.loading && <Spinner/>}           {/* if loading state is true, spinner will be shown  */}

        {/* if loading state is false,then articles should be iterated and shown. Also,we are passing the props for title,description,Urltoimage, 
            so that when we need to update them, they get easily updated  */}
            
        <div className='row'>
               {!this.state.loading && this.state.articles.map((element) => {return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title:""} desc={element.description?element.description:""} 
                imgurl={element.urlToImage?element.urlToImage:"https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb"} 
                newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
            </div>})}
            
        </div>
        <div className='container d-flex justify-content-between'> 

            {/* button of previous will be diabled if the user try to fetch news for page less than or equal to 1  
                and next button will be disabled if user try to fetch the news beyond the possible number of pages.*/}

            <button disabled={this.state.page<=1} type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick}> &larr; Previous </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-success" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
