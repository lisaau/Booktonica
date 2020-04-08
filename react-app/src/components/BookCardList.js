import React, { Component } from "react";
import BookCard from "./BookCard";
import { Row } from "reactstrap";

class BookCardList extends Component {
  render() {
    return (
      <Row>
        {this.props.books.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            displayList={() => this.props.displayList()}
            updateCurrentBooklist={this.props.updateCurrentBooklist}
            currentBooklistID={this.props.currentBooklistID}
            />
        ))}
      </Row>
    );
  }
}

export default BookCardList;
