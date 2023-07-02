export function format(
	value: number,
	style: string,
	maximumFractionDigits?: number,
	notation?: string,
	compactDisplay?: string
) {
	const locale = 'en-US';
	const formatterConfig = {
		style,
		currency: 'USD',
		currencySign: 'accounting',
		maximumFractionDigits,
		notation,
		compactDisplay
	} as Intl.NumberFormatOptions;

	const formatter = new Intl.NumberFormat(locale, formatterConfig);
	const formattedValue = formatter.format(value);

	return formattedValue;
}
