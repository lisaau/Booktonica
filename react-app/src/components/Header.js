import React, { Component } from "react";
 class Header extends Component {
    render() { 
        console.log(this.props);
        
        let displayAllMessage = <>Showing All {this.props.books.length} Books</>;
        let displayListViewMessage = <>Viewing {this.props.booklistName}</>;
        let displayMessage = this.props.displayListView ? displayListViewMessage : displayAllMessage;
        return  (
           <h1 className="Header">{displayMessage}</h1>
        )
    }
 }

export default Header;