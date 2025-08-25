# eleventy-plugin-airport-shortcode

An Eleventy plugin that adds an `{% airport %}` shortcode for displaying airport information using IATA airport codes.

## Installation

```bash
npm install eleventy-plugin-airport-shortcode
```

## Usage

Add the plugin to your `.eleventy.js` configuration file:

```javascript
import airportPlugin from 'eleventy-plugin-airport-shortcode';

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(airportPlugin);
    
    // Your other configuration...
}
```

Then use the shortcode in your templates:

```liquid
{% airport "YYZ" %}
{% airport "LAX" %}
{% airport "LHR" %}
```

### More Examples

```liquid
<!-- Major international airports -->
{% airport "JFK" %} - John F. Kennedy International Airport
{% airport "CDG" %} - Charles de Gaulle Airport
{% airport "NRT" %} - Narita International Airport
{% airport "SYD" %} - Sydney Kingsford Smith Airport

<!-- Travel blog example -->
Flying from {% airport "YVR" %} to {% airport "FCO" %} via {% airport "FRA" %} 
was an amazing journey through three different time zones.

<!-- Invalid codes (shows error message) -->
{% airport "XYZ" %} - Will show "XYZ (airport not found)"
```

## Output

The shortcode generates HTML like this:

```html
<span class="airport-summary">
    <span class="airport-summary__code" title="Lester B. Pearson International Airport">YYZ</span>
    <span class="airport-summary__location">Toronto, Canada</span>
</span>
```

## Configuration

You can customize the plugin behavior by passing options:

```javascript
eleventyConfig.addPlugin(airportPlugin, {
    shortcodeName: 'airport',        // Change the shortcode name (default: 'airport')
    errorPrefix: 'airport not found', // Custom error message (default: 'airport not found')  
    showError: true                  // Show error messages for invalid codes (default: true)
});
```

### Options

- **`shortcodeName`** (string, default: `'airport'`): The name of the shortcode
- **`errorPrefix`** (string, default: `'airport not found'`): Custom error message for unknown airport codes
- **`showError`** (boolean, default: `true`): Whether to display error messages for invalid codes

## CSS Styling

The plugin generates HTML with these CSS classes that you can style:

```css
.airport-summary {
    /* Container for the entire airport display */
    display: inline-block;
}

.airport-summary-code {
    /* Styles for the airport code (e.g., "YYZ") */
    font-weight: bold;
    font-family: monospace;
    background: #f0f0f0;
    padding: 2px 6px;
    border-radius: 3px;
}

.airport-summary-location {
    /* Styles for city, country (e.g., "Toronto, Canada") */
    color: #666;
    margin-left: 0.5em;
    font-size: 0.9em;
}
```

### Example Styling for Travel Blogs

```css
.airport-summary {
    display: inline-block;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 8px 12px;
    margin: 2px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
}

.airport-summary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.airport-summary-code {
    color: #2c5aa0;
    font-weight: bold;
    font-family: 'SF Mono', Monaco, 'Consolas', monospace;
    font-size: 1.1em;
}

.airport-summary-location {
    display: block;
    color: #666;
    font-size: 0.85em;
    margin-top: 2px;
}
```

## Data Source

This plugin uses the [airport-codes](https://www.npmjs.com/package/airport-codes) npm package, which provides comprehensive IATA airport code data.

## Requirements

- Node.js 18.0.0 or higher
- Eleventy 2.0.0 or higher

## License

MIT
