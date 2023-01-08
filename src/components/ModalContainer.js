import './Modal.css'

const ModalContainer = ({ open, handleButtonClick, children }) => (
  <div
    className={open
      ? 'inner-modal inner-modal-open'
      : 'inner-modal'}
  >
    <div
      className={open
        ? 'content-wrapper content-open'
        : 'content-wrapper'}
    >
      {children}
      <button
        onClick={handleButtonClick}
      >Close
      </button>
    </div>
  </div>
)

export default ModalContainer
