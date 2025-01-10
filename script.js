document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.gallery-nav a'); 
    const categories = document.querySelectorAll('.gallery-category'); 

    navLinks.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault(); 
	
			// 非表示
			categories.forEach(category => category.classList.remove('active'));
	
			
			const targetCategory = document.getElementById(link.dataset.category);
			if (targetCategory) {
				targetCategory.classList.add('active');
			}
		});
	});
    // 初期表示
    document.getElementById('Fanart').classList.add('active');
});
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.modal .close');


const galleryImages = document.querySelectorAll('.gallery-grid img');
galleryImages.forEach(img => {
	img.addEventListener('click', () => {
		modal.style.display = 'block'; 
		modalImage.src = img.src; 
	});
});


closeModal.addEventListener('click', () => {
	modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});
