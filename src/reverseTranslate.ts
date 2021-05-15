import * as translate from '@vitalets/google-translate-api'

export async function reverseTranstale($d: string) {
	const d = translate($d, { from: 'en', to: 'fr' })
	return (await d).text
}