import Form from "./common/Form"
function Modal({isOpen, close}){

    const CloseModal = () =>{
        close()
    }
    return(
        <div onClick={CloseModal} className={isOpen ? "modal modal--open" : " modal"}>
        <div onClick={(e) => e.stopPropagation()} className="modal__content">
            <button onClick={CloseModal} className="modal__close">&#10006;</button>
            <h2 className="modal__title">Налоговый вычет</h2>
            <p className="modal__text">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
            <Form classForm="modal__form"/>
        </div>
    </div>
    )
}

export default Modal