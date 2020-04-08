import React, { Component } from "react";
import { Badge } from "reactstrap";

class BookListBadges extends Component {
    render() { 
        let buttonMapper = 
            this.props.booklists.filter(booklist =>
                booklist.list_id !== this.props.currentBooklistID
            ).map(booklist => {
                return <Badge 
                        color="primary" 
                        pill
                        className='BooklistBadge'
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.displayList();
                            this.props.updateCurrentBooklist(booklist);
                        }}>
                            {booklist.list_name}</Badge>
            })
            
        return <div>{buttonMapper}</div>
    }
}

export default BookListBadges;
