import React, { Component } from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class BookCard extends Component {
  render() {
    const { cover_image_url, summary, title, author_name } = this.props.book;
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
            <CardText>{summary}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default BookCard;
