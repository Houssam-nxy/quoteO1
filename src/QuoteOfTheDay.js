import React, { useState, useEffect } from 'react';

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    // Function to fetch a random quote from the Quotable API
    const getRandomQuote = async () => {
      try {
        // Make a GET request to the Quotable API
        const response = await fetch('https://api.quotable.io/random');

        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        // Parse the JSON response
        const data = await response.json();

        // Set the quote in the component state
        setQuote({ content: data.content, author: data.author });
      } catch (error) {
        // Handle errors, e.g., network issues or API response errors
        console.error('Error fetching quote:', error.message);
      }
    };

    // Call the function to fetch a random quote when the component mounts
    getRandomQuote();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2>Quote of the Day</h2>
      <blockquote>{`"${quote.content}"`}</blockquote>
      <cite>{`- ${quote.author}`}</cite>
    </div>
  );
};

export default QuoteOfTheDay;
