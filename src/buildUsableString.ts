import * as wtn from 'words-to-numbers'

import { StringToken } from './StringToken'
import { Token } from './Token'
import { transtale } from './translate'
import { warn } from './warn'

export async function buildUsableString(arr: Token[]) {
	var str = ''

	for (const _i in arr) {
		const i = arr[_i]

		if (i.type === StringToken.NUMBER) {
			str += wtn.default(await transtale(i.value))
		} else if (i.type === StringToken.OPERATOR) {
			switch (i.value) {
				case 'plus':
					str += '+'
					break

				case 'moins':
					str += '-'
					break

				case 'fois':
					str += '*'
					break

				case 'divisé':
					str += '/'
					break
			}
		} else if (i.type === StringToken.BRACKET) {
			if ((['(', '[', '{']).includes(i.value)) {
				str += '('
			} else str += ')'
		} else {
			warn(['Unknown value: ' + i.value, 'Skipping this token!'])
		}
	}

	return str
}