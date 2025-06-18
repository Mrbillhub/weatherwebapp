# Weather App - Setup Instructions

## Quick Start

1. **Extract the zip file** to your desired location
2. **Open terminal/command prompt** and navigate to the weather-app folder:
   ```bash
   cd weather-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000`

## Using Real Weather Data

The app works immediately with demo data, but to use real weather data:

1. **Get a free API key** from [OpenWeatherMap](https://openweathermap.org/api)
2. **Open the file**: `src/services/weatherService.js`
3. **Replace the line**:
   ```javascript
   const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
   ```
   with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

4. **Save the file** and refresh your browser

## Features

✅ Multi-page application (Home, About, Contact)
✅ Real-time weather data display
✅ City selection dropdown
✅ Current location detection
✅ Local storage for user preferences
✅ Responsive design for all devices
✅ Loading states and error handling
✅ Modern UI with smooth animations

## Troubleshooting

**If you get module errors:**
- Make sure you're in the correct directory
- Run `npm install` again
- Try deleting `node_modules` folder and running `npm install` again

**If the weather data doesn't load:**
- Check if you have a valid API key from OpenWeatherMap
- Ensure your internet connection is working
- The app will show demo data if no API key is provided

**If the development server won't start:**
- Make sure port 3000 is not already in use
- Try running `npm run dev -- --port 3001` to use a different port

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## Support

If you need help:
1. Check the README.md file for detailed documentation
2. Use the Contact page in the application
3. Check the browser console for any error messages

---

Enjoy your new weather app! 🌤️