import "../styles/Modal.css";

const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
