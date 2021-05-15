import * as chalk from 'chalk'

export function warn(d: string[]) {
	console.log(chalk`⚠️ {bold.yellow WARN}`)

	d.forEach((i) => {
		console.log(chalk` - {italic ${i}}`)
	})

	return '' // TypeScript needs this :o~((
}