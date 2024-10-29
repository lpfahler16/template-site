import React, { ReactNode } from "react";
import { ModalHeaderProps } from "react-bootstrap";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { MdClose } from "react-icons/md";

export const PfModal: React.FC<ModalProps> = ({
  children,
  className,
  contentClassName,
  ...props
}) => {
  let classes = "bg-dark-gray border-lightest-gray";
  return (
    <Modal contentClassName={classes + " " + className} {...props}>
      {children}
    </Modal>
  );
};

export const PfModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  className,
  onHide,
  closeButton,
  ...props
}) => {
  let classes = "";
  return (
    <Modal.Header className={classes + " " + className} {...props}>
      {children}
      {onHide && (
        <MdClose
          className="text-lightest-gray cursor-pointer h-6 w-6"
          onClick={onHide}
        />
      )}
    </Modal.Header>
  );
};

export const PfModalTitle: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Modal.Title className="text-lightest-gray">{children}</Modal.Title>;
};

export const PfModalBody: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Modal.Body className="text-lightest-gray">{children}</Modal.Body>;
};

export const PfModalFooter: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Modal.Footer className="text-lightest-gray">{children}</Modal.Footer>;
};
