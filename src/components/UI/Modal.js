import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalDestination = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {/*createPortal, renders given elements to a given location in the DOM tree*/}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalDestination
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDestination
      )}
    </Fragment>
  );
};
export default Modal;
