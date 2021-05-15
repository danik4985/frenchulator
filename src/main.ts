import * as chalk from 'chalk'
import * as rl from 'readline-sync'
import * as Meth from 'mathjs'

import { buildUsableString } from './buildUsableString'
import { error } from './error'
import { prepareString } from './prepareString'
import { tokenizeString } from './tokenizeString'
import { fancyResponse } from './fancyResponse'

async function main() {
	console.log(chalk`{bold Welcome to {rgb(231, 76, 60) Frenchu}{rgb(41, 128, 185) Lator}}`)
	console.log()

	const query = rl.question(chalk`Your {bold.rgb(231, 76, 60) math query:} `)
		||
		error(['You must enter a query!', 'At\tconst query = rl.que(...)', 'At\terror([\'Yo(...)'])

	const preparedStr = prepareString(query)
	const tokenized = await tokenizeString(preparedStr)
	const usable = await buildUsableString(tokenized)
	const value = Meth.evaluate(usable)

	await fancyResponse({ equation: usable, result: value })
}

main().catch((err) => {
	error(['An error has occured while running async function main()', 'Data: ' + err])
})