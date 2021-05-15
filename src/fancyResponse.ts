import * as chalk from 'chalk'
import * as ntw from 'number-to-words'
import { reverseTranstale } from './reverseTranslate'

export async function fancyResponse({ equation, result }) {
	const $$$ = await reverseTranstale(ntw.toWords(result))

	console.log(chalk`
┏━▋
┣━━ {dim Equation: {bold ${equation}}}
┃ {blue ▋}▋{red ▋}
┣━━━━ {bold Result: {whiteBright.underline ${result}}}
┣━━━━━ {bold Résultat: {whiteBright.underline ${$$$}}}
┗━━━━━━━▋
`)
}

// (quatre-vingt-trois moins [quinze divisé cinq]) fois treize