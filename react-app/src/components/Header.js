import React, { Component } from "react";
 class Header extends Component {
    render() { 
        let displayAllMessage = <>Showing All {this.props.books.length} Books</>;
        let displayListViewMessage = 'Viewing <BOOKLISTNAME>';
        let displayMessage = this.props.displayListView ? displayListViewMessage : displayAllMessage;
        return  (
           <div>{displayMessage}</div>
        )
    }
 }

export default Header;