export function prepareString(string: string) {
	// Split ()
	const _spl = ['(', ')', '[', ']', '{', '}']
	_spl.forEach((i) => {
		string = string.split(i).join(` ${i} `)
	})

	// Remove more spaces
	string = string.split(/  +/gm).join(' ')

	// Trim
	string = string.trim()

	return string
}