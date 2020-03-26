import React, { Component } from "react";
import { getBookListsofBook } from "../helpers/booktonica-api-fetcher";
import {
    Badge,
    Button
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
                return <Button 
                    color="primary" 
                    outline 
                    onClick={(event) => {
                        event.preventDefault();
                        this.props.displayList()
                    }}>
                    {booklistName.list_name} <Badge color="secondary"></Badge>
                    </Button>
            })
            
        return (
            <div>
                {/* <Button color="primary" outline>
                PUT LISTS HERE <Badge color="secondary"></Badge>
                </Button> */}
                {buttonMapper} 
            </div>
        )
    }
 }

export default BookListBadges;