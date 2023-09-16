function Modal({ selectedPhoto, closeModal }) {
	return (
		<div className='imageModal'>
			<button className='close' onClick={closeModal}>
				close
			</button>
			<img
				src={`.${selectedPhoto.images?.hero?.large}`}
				alt={selectedPhoto?.name}
				className='modalImage'
			/>
		</div>
	);
}

export default Modal;
