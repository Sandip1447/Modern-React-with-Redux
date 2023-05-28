import Modal from "../elements/Modal";
import Button from "../elements/Button";
import {useState} from "react";

function ModalPage() {

    const [showModal, setShowModal] = useState(false)

    const handleClick = (event) => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div className="relative">

            <Button primary onClick={handleClick}>Open Modal </Button>
            {showModal && modal}

        </div>
    )
}

export default ModalPage