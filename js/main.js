const gallery = document.querySelector('.gallery');
const fragment = document.createDocumentFragment();
const photes = 6; // Cantidad de fotos en galeria.

for (i = 1; i <= photes; i++) {
	const img = document.createElement('IMG');
	fragment.appendChild(img);

	if (i == photes) {
		gallery.appendChild(fragment);
		const galleryImgs = gallery.childNodes;

		for (i = 0; i < galleryImgs.length; i++) {
			const img = galleryImgs[i];
			img.setAttribute('src', `assets/img/gallery/photo${i + 1}.png`);
		}
	}
}
