import React from "react";
import DeleteIcon from '../../assets/DeleteIcon.svg'

function Modal({children, setShowModal, showModal, bg}) {
    const closeModal = (evt) => {
        if(evt.target.id === "wrapper"){
            setShowModal(false)
        }
    }
    return (
        <div onClick={closeModal} id="wrapper" className={`fixed z-50 top-0 bottom-0 right-0 left-0 backdrop-blur-md transition-[0.5s] ${showModal ? "" : "scale-0"}`}>
            <div className={`w-[650px] ${bg ? bg : "bg-blue-400"} relative p-5 rounded-lg mx-auto mt-[150px]`}>
                <button className="cursor-pointer absolute top-2 right-2">
                    <img src={DeleteIcon} alt="Delete Icon" width={22} height={22} />
                </button>
                {children}
            </div>
        </div>
    )
}
export default Modal;
