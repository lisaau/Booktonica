import React, { Component } from "react";
import BookListBadges from './BookListBadges'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

/**
 * Learn more about reactstrap Card component
 * https://reactstrap.github.io/components/card/
 */
class BookCard extends Component {
  render() {
    const {
      cover_image_url,
      summary,
      title,
      author_name,
      publication_date,
      id,
      booklists
    } = this.props.book;
    
    return (
      <Col xs="4">
        <Card>
          <CardImg
            className="bookCover"
            src={cover_image_url}
            alt="Book cover"
          />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{author_name}</CardSubtitle>
            <BookListBadges 
              bookID={id} 
              displayList={() => this.props.displayList()}
              updateCurrentBooklistName={this.props.updateCurrentBooklistName}
              updateBooks={this.props.updateBooks}
              booklists={booklists}
              />
            <CardText>
              <i>{publication_date}</i> - {summary}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default BookCard;
