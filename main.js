const $inputElement = document.querySelector('input');
const $buttonsElement = Array.from(document.querySelectorAll('.numero'));
const $buttonSum = document.querySelector('.mas');
const $buttonRes = document.querySelector('.menos');
const $buttonPor = document.querySelector('.por');
const $buttonSlash = document.querySelector('.slash');
const $buttonReset = document.querySelector('.reset');

const $buttonIgual = document.querySelector('.igual');

$buttonsElement.forEach((button) => {
	button.onclick = (event) => {
		if (parseInt($inputElement.value) === 0) {
			$inputElement.setAttribute('value', event.target.value);
		} else {
			let test = $inputElement.value.concat(event.target.value);
			$inputElement.setAttribute('value', test);
		}
	};
});

// Sumar
$buttonSum.onclick = () => {
	$inputElement.setAttribute('value', $inputElement.value + ' + ');
};

// restar
$buttonRes.onclick = () => {
	$inputElement.setAttribute('value', $inputElement.value + ' - ');
};

// Multiplicar
$buttonPor.onclick = () => {
	$inputElement.setAttribute('value', $inputElement.value + ' x ');
};

// Dividir
$buttonSlash.onclick = () => {
	$inputElement.setAttribute('value', $inputElement.value + ' / ');
};

// Reset
$buttonReset.onclick = () => {
	$inputElement.setAttribute('value', '0');
};

// Imprimir resultado
$buttonIgual.onclick = () => {
	const sumCheck = $inputElement.value.includes('+');
	const resCheck = $inputElement.value.includes('-');
	const byCheck = $inputElement.value.includes('x');
	const divCheck = $inputElement.value.includes('/');

	if (sumCheck) {
		const sumarString = $inputElement.value.split('+');
		const sumar = sumarString.map((sum) => {
			return parseInt(sum);
		});

		const resultado = sumar.reduce((total, current) => {
			return total + current;
		});
		//console.log(toString(resultado));
		$inputElement.setAttribute('value', resultado.toString());
	} else if (resCheck) {
		const restarString = $inputElement.value.split('-');
		const restar = restarString.map((res) => {
			return parseInt(res);
		});

		const resultado = restar.reduce((total, current) => {
			return total - current;
		});
		$inputElement.setAttribute('value', resultado.toString());
	} else if (byCheck) {
		const multiplicarString = $inputElement.value.split('x');
		const multiplicar = multiplicarString.map((res) => {
			return parseInt(res);
		});

		const resultado = multiplicar.reduce((total, current) => {
			return total * current;
		});
		$inputElement.setAttribute('value', resultado.toString());
	} else if (divCheck) {
		const dividirString = $inputElement.value.split('/');
		const dividir = dividirString.map((res) => {
			return parseInt(res);
		});

		const resultado = dividir.reduce((total, current) => {
			return total / current;
		});
		$inputElement.setAttribute('value', resultado.toString());
	}
};
