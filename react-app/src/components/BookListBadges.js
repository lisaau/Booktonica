import React, { Component } from "react";
import { getBookListsofBook } from "../helpers/booktonica-api-fetcher";
import {
    Badge,
  } from "reactstrap";

 class BookListBadges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booklist: []
        }
    }

    componentDidMount() {
        getBookListsofBook(this.props.bookID).then(booklist => this.setState({booklist: booklist}))
    }

    render() { 
        let buttonMapper = 
            this.state.booklist.map(booklistName => {
                return <Badge 
                        color="primary" 
                        pill
                        className='BooklistBadge'
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.displayList();
                            this.props.updateCurrentBooklistName(booklistName.list_name);
                            this.props.updateBooks(booklistName.id);
                        }}>
                            {booklistName.list_name}</Badge>
            })
            
        return (
            <div>
                {buttonMapper} 
            </div>
        )
    }
 }

export default BookListBadges;