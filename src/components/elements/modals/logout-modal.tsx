
import ConfirmationModal from './confirmation-modal'
const LogOutModal = ({onClose, logOut} :{onClose:() => void, logOut:() => void}) => {
  return (
    <>
     <ConfirmationModal title='Logout' btnLabel='Cancel' handleClick={onClose} btn2Label='Continue' enableTwoBtn={true} btn2Style='text-white bg-red-500' handle2Click={logOut} desc='Are you sure you want to logout?'/>
    </>
  )
}

export default LogOutModal;