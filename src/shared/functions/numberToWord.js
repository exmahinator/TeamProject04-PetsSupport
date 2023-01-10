export function numberToWord(n) {
	var string = n.toString(),
		units,
		tens,
		scales,
		start,
		end,
		chunks,
		chunksLen,
		chunk,
		ints,
		i,
		word,
		words;

	/* Is number zero? */
	if (parseInt(string) === 0) {
		return 'Less than one year';
	}

	/* Array of units as words */
	units = [
		'',
		'One',
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
		'Ten',
		'Eleven',
		'Twelve',
		'Thirteen',
		'Fourteen',
		'Fifteen',
		'Sixteen',
		'Seventeen',
		'Eighteen',
		'Nineteen',
	];

	/* Array of tens as words */
	tens = [
		'',
		'',
		'Twenty',
		'Thirty',
		'Forty',
		'Fifty',
		'Sixty',
		'Seventy',
		'Eighty',
		'Ninety',
	];

	/* Array of scales as words */
	scales = [
		'',
		'Thousand',
		'Million',
		'Billion',
		'Trillion',
		'Quadrillion',
		'Quintillion',
		'Sextillion',
		'Septillion',
		'Octillion',
		'Nonillion',
		'Decillion',
		'Undecillion',
		'Duodecillion',
		'Tredecillion',
		'Quatttuor-decillion',
		'Quindecillion',
		'Sexdecillion',
		'Septen-decillion',
		'Octodecillion',
		'Novemdecillion',
		'Vigintillion',
		'Centillion',
	];

	/* Split user arguemnt into 3 digit chunks from right to left */
	start = string.length;
	chunks = [];
	while (start > 0) {
		end = start;
		chunks.push(string.slice((start = Math.max(0, start - 3)), end));
	}

	/* Check if function has enough scale words to be able to stringify the user argument */
	chunksLen = chunks.length;
	if (chunksLen > scales.length) {
		return '';
	}

	/* Stringify each integer in each chunk */
	words = [];
	for (i = 0; i < chunksLen; i++) {
		chunk = parseInt(chunks[i]);

		if (chunk) {
			/* Split chunk into array of individual integers */
			ints = chunks[i].split('').reverse().map(parseFloat);

			/* If tens integer is 1, i.e. 10, then add 10 to units integer */
			if (ints[1] === 1) {
				ints[0] += 10;
			}

			/* Add scale word if chunk is not zero and array item exists */
			if ((word = scales[i])) {
				words.push(word);
			}

			/* Add unit word if array item exists */
			if ((word = units[ints[0]])) {
				words.push(word);
			}

			/* Add tens word if array item exists */
			if ((word = tens[ints[1]])) {
				words.push(word);
			}

			/* Add hundreds word if array item exists */
			if ((word = units[ints[2]])) {
				words.push(word + ' hundred');
			}
		}
	}
	const age = words.reverse().join(' ');
	if (!age) return 'Unknown';
	if (age === 'One') {
		return 'One year';
	}

	console.log('age', age);
	return `${age} years`;
	// return (`${words.reverse().join(' ')} years`);
}
