import airports from 'airport-codes';

export default function eleventy11tyPluginAirportShortcode(eleventyConfig, options) {
    const {
        shortcodeName = 'airport',
        errorPrefix = 'airport not found',
        showError = true,
        className = 'airport-summary'
    } = options;

    eleventyConfig.addShortcode(shortcodeName, function(code) {
        try {
            // Handle empty or invalid input
            if (!code || typeof code !== 'string') {
                if (showError) {
                    return `<span class="${className}">${code || 'N/A'} (invalid airport code)</span>`;
                }
                return '';
            }

            // Normalize the airport code (uppercase, trim)
            const normalizedCode = code.trim().toUpperCase();

            const airport = airports.findWhere({ iata: normalizedCode });

            if (!airport) {
                if (showError) {
                    return `<span class="${className}>${normalizedCode} (${errorPrefix})</span>`;
                }
                return '';
            }

            const name = airport.get('name');
            const city = airport.get('city');
            const country = airport.get('country');

            return `<span class="${className}">
                <span class="${className}__code" title="${name}">${normalizedCode}</span>
                <span class="${className}__location">${city}, ${country}</span>
            </span>`;
        } catch (error) {
            if (showError) {
                return `<span class="${className}">${code} (error: ${error.message})</span>`;
            }
            return '';
        }
    });
}
