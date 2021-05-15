import * as translate from '@vitalets/google-translate-api'

export async function transtale($d: string) {
	const d = translate($d, { from: 'fr', to: 'en' })
	return (await d).text
}