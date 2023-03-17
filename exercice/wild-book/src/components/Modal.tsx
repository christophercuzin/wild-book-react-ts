import { useContext, PropsWithChildren } from "react";
import { wildersContext } from "../contexts/WildersContext";
import { id } from "../type/typeId";

type ModalProps = PropsWithChildren<id>;

const Modal = ({ children, id }: ModalProps) => {
  const { handleCloseModal } = useContext(wildersContext);
  return (
    <div id={`${id.toString()}modal`} className="modalHidden">
      <div className="modal">
        <div className="modalHeader">
          <h4>Add a skill</h4>
          <span onClick={handleCloseModal}>X</span>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
