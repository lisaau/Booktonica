import React, { Component } from "react";
import {
    Button
} from "reactstrap";

 class SeeAllBooksButton extends Component {
    render() { 
        let btn = <Button onClick={(event) => {
                    event.preventDefault();
                    this.props.displayAll()}}>
                    See All Books
                </Button> 
        // only show the button if we are viewing a list of books
        let revertButton = this.props.displayListView ? btn : null;
        return revertButton; 
    }
 }

export default SeeAllBooksButton;