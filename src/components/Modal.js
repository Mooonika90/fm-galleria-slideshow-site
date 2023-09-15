function Modal({ selectedPhoto, closeModal }) {
	return (
		<div className='imageModal'>
			<span className='close' onClick={closeModal}>
				close
			</span>
			<img
				src={`.${selectedPhoto.images?.hero?.large}`}
				alt={selectedPhoto?.name}
				className='modalImage'
			/>
		</div>
	);
}

export default Modal;
