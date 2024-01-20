import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/layout/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className="relative">
      <Button className="z-10" onClick={() => setModal((prev) => !prev)}>
        Open Modal
      </Button>
      <Modal isOpen={modal} onClose={handleModalClose}>
        <Modal.Header>
          <h4>this is modal title</h4>
          <Modal.CloseButton></Modal.CloseButton>
        </Modal.Header>
        <p> this is modal content</p>
      </Modal>
    </div>
  );
};

export default Home;
