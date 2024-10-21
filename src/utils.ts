// Format date
function formatDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Capitalize the first letter of a string
function capitalize(str: string): string {
	if (typeof str !== 'string' || str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, capitalize };
