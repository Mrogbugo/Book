import React, { Component } from "react";
import styled from "styled-components";

// Define the styled button component
const StyledButton = styled.button` 
    border: 2px solid #4caf50;
    background-color: #4caf50; 
    color: white;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;
    
    &:hover {
        background-color: #45a049;
        border-color: #45a049;
    }
`;

export default class Book extends Component {
    render() {
        const { Id, img, title, author, showInfo } = this.props.info;
        const { handleDelete, toggleInfo } = this.props;

        const authorstyle = {
            letterSpacing: "10px",
            color: "green"
        }

        return (
            <article className="book">
                <img src={img} width="150" alt="book" />
                <div>
                    <h4 style={{ fontSize: "2rem", color: "red", fontFamily: "Brush Script MT, cursive" }}>Title: {title}</h4>
                    <h6 style={authorstyle}>Author: {author}</h6>
                    <StyledButton onClick={() => toggleInfo(Id)}>Info</StyledButton>
                    <StyledButton onClick={() => handleDelete(Id)}>Delete</StyledButton>
                    {showInfo && (
                        <>
                            {/* Display information about The Godfather */}
                            {title === "Godfather" && (
                                <p>
                                    The Godfather, written by Mario Puzo in 1969, follows the powerful Corleone crime family,
                                    led by Vito Corleone. The story centers on Vito’s son, Michael, who is reluctantly drawn into
                                    the mafia world, ultimately taking over the family’s empire. Themes of loyalty, power, and justice
                                    drive this classic tale, which became an iconic film in 1972 directed by Francis Ford Coppola.
                                </p>
                            )}
                            {/* Display information about Angels & Demons */}
                            {title === "Angels and Demon" && (
                                <p>
                                    "Angels & Demons" is a thrilling novel by Dan Brown
                                    that follows Harvard symbologist Robert Langdon as he investigates
                                    a murder at CERN and uncovers a conspiracy by the Illuminati to destroy Vatican City.
                                    The novel explores themes of science vs. religion, morality, and the power of secrets.
                                </p>
                            )}
                            {/*Display information about Dan Vinci Code*/}
                            {title === "DanVinci Code" && (
                                <p>
                                    The Da Vinci Code by Dan Brown is a gripping mystery thriller that follows Harvard symbologist Robert Langdon
                                    as he becomes embroiled in a murder investigation at the Louvre Museum in Paris.
                                    The victim, Jacques Saunière, leaves behind a series of cryptic clues that Langdon,
                                    alongside French cryptologist Sophie Neveu, must decipher.
                                    As they unravel the mystery, they discover secrets related to the Holy Grail and
                                    the controversial theories surrounding Christianity, including hidden messages
                                    in famous works of art. The story explores themes of faith, truth,
                                    and the conflict between religion and science. As they race against time
                                    to solve the puzzle, Langdon and Neveu encounter a shadowy secret society
                                    and a relentless antagonist, leading to a breathtaking conclusion that challenges
                                    historical beliefs.
                                </p>
                            )}
                        </>
                    )}
                </div>
            </article>
        );
    }
}
