const API_BASE_URL = process.env.API_BASE_URL;

export const fetchStories = async () => {
  try {
    const res = await fetch(`https://assign-stage-insta.vercel.app/api/story`);

    if (!res.ok) {
      // Throw an error if response is not OK
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data.feed;
  } catch (error) {
    // Handle errors
    console.error('Error fetching feed:', error);
    throw error; // Re-throw the error to be caught by the caller
  }
};
