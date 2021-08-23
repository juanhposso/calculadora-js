let $inputElement = document.querySelector('input').value;
const $buttonsElement = Array.from(document.querySelectorAll('button'));

$buttonsElement.forEach((button) => {
	button.addEventListener('click', (event) => {
		if ($inputElement == '0') {
			return ($inputElement = event.target.value);
			//console.log($inputElement, ' if jijij');
		} else {
			let resultado = $inputElement.concat(event.target.value);

			return ($inputElement = resultado);
			//console.log($inputElement, ' else');
		}
	});
});
