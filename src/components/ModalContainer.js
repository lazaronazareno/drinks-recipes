import './Modal.css'
import close from '../assets/cross.png'

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
      <img
        src={close}
        onClick={handleButtonClick}
        className='modal-button'
        alt='Cross icons created by Ilham Fitrotul Hayat - Flaticon'
      />
    </div>
  </div>
)

export default ModalContainer
