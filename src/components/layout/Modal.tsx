import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { ReactNode, createContext, useContext, useRef } from "react";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
type TModalContext = { onClose: () => void };
type TCloseButton = { children?: ReactNode };
type THeader = TCloseButton;

const ModalContext = createContext<TModalContext | null>(null);

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex items-center justify-center bg-gray-500/70 invisible",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md p-4 text-2xl"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          className="size-6 bg-red-600 rounded-md text-white p-0.5"
          fill="none"
          strokeWidth={3.7}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex w-full items-center justify-between mb-3">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;
export default Modal;
