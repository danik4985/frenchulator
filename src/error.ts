import * as chalk from 'chalk'

export function error(d: string[]) {
	console.log(chalk`❌️ {bold.magenta ERROR}`)

	d.forEach((i) => {
		console.log(chalk` - {italic ${i}}`)
	})

	process.exit(0)
	return '' // TypeScript needs this :o~((
}