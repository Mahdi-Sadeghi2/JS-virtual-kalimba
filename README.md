# ME$ Kalimba

## Overview

ME$ Kalimba is a simple web-based simulation of a kalimba, also known as a thumb piano. This interactive application allows users to play notes from a 17-key kalimba arranged in a C major scale. Users can click on the metal keys, tap on touch devices, or use keyboard controls to produce sounds.

## Features

- **Interactive Tines**: Click or tap on the kalimba tines to play notes.
- **Keyboard Support**: Use the keyboard for easy access to note playing.
- **Dynamic Layout**: The tines are arranged with the longest in the center and shorter ones on the sides, mimicking a real kalimba layout.
- **Sound Simulation**: Authentic sound simulation using the Web Audio API.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling of the kalimba and its components.
- **JavaScript**: Logic for playing sounds and handling user interactions.

## Getting Started

### Prerequisites

To run the ME$ Kalimba application, you need:

- A web browser that supports the Web Audio API (most modern browsers).
- Basic knowledge of HTML, CSS, and JavaScript (optional for users).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/kalimba.git
   cd kalimba
   ```

2. **Open the HTML File**:
   Open `index.html` in your preferred web browser.

### Usage

- **Playing Notes**: Click or tap on the tines to play the corresponding notes.
- **Keyboard Controls**: Press the keys `q`, `w`, `e`, `r`, `t`, `y`, `u`, `i`, `o`, `p`, `a`, `s`, `d`, `f`, `g`, `h`, `j` to play notes from left to right.

## Code Structure

- **`index.html`**: Main HTML file containing the structure of the kalimba interface.
- **`Kalimba.css`**: Stylesheet for the kalimba layout and design.
- **`Kalimba.js`**: JavaScript file responsible for the functionality of the kalimba, including sound generation and user interaction.

### Notes Array

The notes are defined in the `Kalimba.js` file as follows:

```javascript
const notes = [
  { note: "D\n:\n2", frequency: 1975.53 },
  { note: "B\n.\n7", frequency: 1760.0 },
  // ... other notes
  { note: "E\n:\n3", frequency: 1174.66 },
];
```

Each note object contains a `note` string for display and a `frequency` for sound generation.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the developers of the Web Audio API for enabling sound synthesis in the browser.
