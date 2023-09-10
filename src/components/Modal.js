

function Modal({ selectedPhoto, closeModal }) {
	return (
		<div className='image-modal'>
			<span className='close' onClick={closeModal}>
				close
			</span>
			<img
				src={`.${selectedPhoto.images?.hero?.large}`}
				alt={selectedPhoto?.name}
				className='modal-image'
			/>
		</div>
	);
}

export default Modal;
