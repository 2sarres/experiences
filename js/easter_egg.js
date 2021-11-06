const secret = document.getElementById('secret');

secret.addEventListener('click', () => {

    var audio = new Audio('audio/le-grand-monarque-sylvain-durif-cest-moi-matdeuh.mp3');
	audio.play();
	const changeDOM2 = document.getElementById('img-bg');
	changeDOM2.style.display = 'none'
	const vi = document.getElementById('v');
	vi.style.display = 'block'
	const vid = document.getElementById('v');
	v.play();
})