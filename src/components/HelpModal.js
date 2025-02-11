/* Importing React from 'react' - importing all of React's named exports 
into a single object called React in order to React functionalities 
(React.Component, etc) 
*/
import React, { useState } from "react";
// Importing React modal for blocking interaction with the underlying page. 
import { Modal, Button } from "react-bootstrap";

const HelpModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setShow(true)}>
        Help
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>How to Play Hangman</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Guess the word by selecting letters. If you make too many 
            incorrect guesses, you lose!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HelpModal;
