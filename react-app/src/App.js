import React, { Component } from "react";
import "./App.css";
import { getAllBooks } from "./helpers/booktonica-api-fetcher";
import Header from "./components/Header";
import BookCardList from "./components/BookCardList";
import SeeAllBooksButton from "./components/SeeAllBooksButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      booklist: [],
      listView: false
    };
  }

  componentDidMount() {
    getAllBooks().then(books => this.setState({ books: books }));
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          books={this.state.books} 
          displayListView={this.state.listView}/>
        <SeeAllBooksButton 
          displayListView={this.state.listView} 
          displayAll={() => this.setState({listView: false})}/>
        <BookCardList 
          books={this.state.books} />
      </div>
    );
  }
}

export default App;
