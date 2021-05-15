import * as wtn from 'words-to-numbers'

import { StringToken } from './StringToken'
import { Token } from './Token'
import { transtale } from './translate'

export async function tokenizeString(string: string) {
	var arr: Token[] = []
	const split = string.split(' ')

	for (const _i in split) {
		const i = split[_i]

		if (i === 'plus'
		 || i === 'moins'
		 || i === 'fois'
		 || i === 'divisé') {

			arr.push({
				type: StringToken.OPERATOR,
				value: i
			})

		} else if (!isNaN(Number(wtn.default(await transtale(i))))) {
			
			arr.push({
				type: StringToken.NUMBER,
				value: i
			})

		} else if (['(', ')', '[', ']', '{', '}'].includes(i)) {
			
			arr.push({
				type: StringToken.BRACKET,
				value: i
			})

		} else if (i != 'par') {

			arr.push({
				type: StringToken.OTHER,
				value: i
			})

		}
	}

	return arr
}