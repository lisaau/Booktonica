import React, { Component } from "react";
import "./App.css";
import { getAllBooks, getBooksFromBooklist } from "./helpers/booktonica-api-fetcher";
import Header from "./components/Header";
import BookCardList from "./components/BookCardList";
import SeeAllBooksButton from "./components/SeeAllBooksButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      listView: false,
      currentBooklistName: ''
    };
  }

  componentDidMount() {
    getAllBooks().then(books => this.setState({ books: books }));
  }
  
  render() {
    console.log("app.js state: ", this.state);
    
    return (
      <div className="App">
        <Header 
          books={this.state.books} 
          displayListView={this.state.listView} 
          booklistName={this.state.currentBooklistName}/>
        <SeeAllBooksButton 
          displayListView={this.state.listView} 
          displayAll={() => this.setState({listView: false})} 
          updateBooks={() => getAllBooks().then(books => this.setState({ books: books }))}/>
        <BookCardList 
          books={this.state.books} 
          displayList={() => this.setState({listView: true})} 
          updateCurrentBooklistName={(booklistName) => this.setState({currentBooklistName: booklistName})} 
          updateBooks={(booklistID) => getBooksFromBooklist(booklistID).then(books => this.setState({books:books}))}/>
      </div>
    );
  }
}

export default App;
