import React, { Component } from "react";
 class Header extends Component {
     render() { 
         return  (
            <div>Showing All {this.props.books.length} Books</div>
         )
    }
 }

export default Header;