const $inputElement = document.querySelector('input');
const $buttonsElement = Array.from(document.querySelectorAll('button'));

$buttonsElement.forEach((button) => {
	button.addEventListener('click', (event) => {
		let input = $inputElement.value;
		if (input == '0') {
			console.log($inputElement, ' if jijij');
			return $inputElement.setAttribute('value', event.target.value);
		} else {
			let resultado = input.concat(event.target.value);
			console.log(resultado);
			return $inputElement.setAttribute('value', resultado);
		}
	});
});
