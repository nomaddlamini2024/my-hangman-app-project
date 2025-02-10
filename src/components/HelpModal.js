import React, { useState } from "react";
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
            Guess the word by selecting letters. If you make too many incorrect
            guesses, you lose!
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
