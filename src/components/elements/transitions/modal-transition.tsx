// import React, { ReactNode } from 'react'
// import { Transition,Dialog, DialogPanel } from '@headlessui/react'
// import { Fragment } from 'react'
// interface TransitionProps {
//   children: ReactNode
//   isOpen: boolean | undefined
//   exitModal: () => void
// }
// const ModalTransition: React.FC<TransitionProps> = ({
//   children,
//   isOpen,
//   exitModal,
// }) => {
//   return (
//     <Transition show={isOpen}>
//       <Dialog as="div" onClose={exitModal}>
//         <Transition.Child
//           as={Fragment}
//           enter="transition eases-in duration-500"
//           enterFrom="transform opacity-0"
//           enterTo="transform opacity-100"
//           leave="transition ease-out duration-500"
//           leaveFrom="transform opacity-0"
//           leaveTo="transform opacity-0"
//         >
//           <section className="h-full w-screen z-1000 bg-white/80 flex items-center justify-center fixed top-0 left-0 bg-opacity-40">
//           <div className="min-h-screen overflow-y-scroll p-3 no-modal-scroll-track">
//            <DialogPanel>
//            <div
//           className={`w-[32rem] max-w-4xl relative mx-auto bg-white  rounded-3xl px-8 py-6  transition-all ease-in-out duration-500`}
//         >
//           {children}
//         </div>
//             </DialogPanel>
//             </div>
//           </section>
//         </Transition.Child>
//       </Dialog>
//     </Transition>
//   )
// }

// export default ModalTransition
