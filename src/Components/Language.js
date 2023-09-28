import axios from 'axios';

const Language = async (props) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('source_language', props.sl);
  encodedParams.set('target_language', props.tl);
  encodedParams.set('text', props.text);
  
  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '60bc3411b2msh765ce5caf3004d6p193348jsna0b00fa183d2',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return -1;
  }
}

export default Language; // Correctly exporting the function

// Call the Language function somewhere in your code to execute it
