import React, { Component } from "react";
import Book from "./Book";
import books from "./BookDTO";
import Modal from "./Modal";
import './index.css';

export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: books.map(book => ({ ...book, showInfo: false })),
            showModal: false,
            bookToDelete: null,
            deletionMessage: "" // State to hold the success message
        };
    }

    handleDeleteRequest = (id) => {
        this.setState({
            showModal: true,
            bookToDelete: id
        });
    };

    confirmDelete = () => {
        const { bookToDelete, books } = this.state;
        const updatedBooks = books.filter((item) => item.Id !== bookToDelete);

        this.setState({
            books: updatedBooks,
            showModal: false,
            bookToDelete: null,
            deletionMessage: "Book Deleted Successfully!" // Set success message
        });

        // Clear the message after 3 seconds
        setTimeout(() => {
            this.setState({ deletionMessage: "" });
        }, 3000);
    };

    closeModal = () => {
        this.setState({
            showModal: false,
            bookToDelete: null
        });
    };

    toggleInfo = (id) => {
        this.setState((prevState) => ({
            books: prevState.books.map(book =>
                book.Id === id ? { ...book, showInfo: !book.showInfo } : book
            )
        }));
    };

    render() {
        return (
            <section className="books">
                {this.state.books.map((item) => (
                    <Book
                        key={item.Id}
                        info={item}
                        handleDelete={() => this.handleDeleteRequest(item.Id)}
                        toggleInfo={this.toggleInfo}
                    />
                ))}

                {/* Show the Modal if showModal is true */}
                {this.state.showModal && (
                    <Modal
                        message="Do you want to delete this book?"
                        onConfirm={this.confirmDelete}
                        onClose={this.closeModal}
                    />
                )}

                {/* Display the success message if it exists */}
                {this.state.deletionMessage && (
                    <div className="deletion-message">
                        {this.state.deletionMessage}
                    </div>
                )}
            </section>
        );
    }
}

