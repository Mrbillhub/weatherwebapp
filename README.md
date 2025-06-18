# Weather App

A modern, responsive weather application built with React and Vite. Get real-time weather information for cities around the world with a clean, user-friendly interface.

## Features

- 🌤️ Real-time weather data
- 📍 Current location detection
- 🏙️ City selection dropdown
- 💾 Local storage for user preferences
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 🧭 Multi-page navigation (Home, About, Contact)

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: Pure CSS with CSS Variables
- **API**: OpenWeatherMap API
- **Storage**: Browser Local Storage

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

5. Replace the placeholder API key in `src/services/weatherService.js`:
   ```javascript
   const API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open your browser and visit `http://localhost:3000`

## Demo Mode

The app includes demo weather data that works without an API key. This allows you to test the application immediately. When you're ready to use real weather data, simply add your OpenWeatherMap API key as described above.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   ├── styles/            # CSS stylesheets
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── package.json
└── README.md
```

## Features in Detail

### Weather Display
- Current temperature with weather icons
- Detailed information (feels like, humidity, wind, pressure)
- Weather descriptions

### Location Features
- Dropdown menu with popular cities
- Geolocation support for current location
- Saved preferences in local storage

### User Interface
- Clean, modern design
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Loading states and error handling

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons and design inspiration from modern web design trends
- Built with React and Vite for optimal performance

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Use the contact form in the app

---

Made with ❤️ using React and Vite# weather.app
