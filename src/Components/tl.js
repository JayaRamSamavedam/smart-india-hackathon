import React, { useState, useEffect } from 'react';
import Language from './Language'; // Import the Language function

function MyComponent() {
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    // Call the Language function with the desired parameters
    Language({
      sl: 'en',
      tl: 'te',
      text: 'What is your name?',
    })
      .then((data) => {
        // Handle the translation data here
        if (data !== -1) {
          setTranslation(data.data.translatedText); // Update the state with the translated text
        } else {
          // Handle the error case
          console.error('Translation error occurred');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // The empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div>
      <p>Translation: {translation}</p> {/* Render the translation */}
    </div>
  );
}

export default MyComponent;
