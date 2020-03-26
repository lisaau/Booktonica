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
        
        //  const bookID = this.props.bookID;
        //  console.log(this.props);

        // async function buttonMapper() {
        //     // get array of booklists for each book and put each booklist into a badge
        //     let arrayOfBooklists = await getBookListsofBook(this.props.bookID).then( booklist => {
        //         booklist.map(book => book.list_name);
        //         // console.log(booklist.map(book => book.list_name));
        //     });
        //     return arrayOfBooklists
        // } 

        // buttonMapper().then(res => console.log(res));
        // let mappedButtons = buttonMapper().then(booklistname => {
        //     return <Button color="primary" outline>
        //     {booklistname} <Badge color="secondary"></Badge>
        //     </Button>
        //   })
        console.log(this.props);
        
        let buttonMapper = 
            this.state.booklist.map(booklistName => {
                return <Button color="primary" outline>
                {booklistName.list_name} <Badge color="secondary"></Badge>
                </Button>
            })
        
        console.log(buttonMapper);
        
        
        
        return (
            <div>
                <Button color="primary" outline>
                PUT LISTS HERE <Badge color="secondary"></Badge>
                </Button>
                {/* {buttonMapper} */}
            </div>
        )
    }
 }

export default BookListBadges;