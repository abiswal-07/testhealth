// Theme.js
import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db', // Pastel Blue
    accent: '#2ecc71', // Pastel Green
    background: '#ecf0f1', // Light Gray
    surface: '#ffffff', // White
    text: '#34495e', // Dark Gray
    placeholder: '#bdc3c7', // Lighter Gray
  },
};
