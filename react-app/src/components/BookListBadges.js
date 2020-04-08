import React, { Component } from "react";
import {
    Badge,
  } from "reactstrap";

 class BookListBadges extends Component {

    render() { 
        let buttonMapper = 
            this.props.booklists.map(booklist => {
                return <Badge 
                        color="primary" 
                        pill
                        className='BooklistBadge'
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.displayList();
                            this.props.updateCurrentBooklistName(booklist.list_name);
                            this.props.updateBooks(booklist.list_id);
                        }}>
                            {booklist.list_name}</Badge>
            })
            
        return (
            <div>
                {buttonMapper} 
            </div>
        )
    }
 }

export default BookListBadges;