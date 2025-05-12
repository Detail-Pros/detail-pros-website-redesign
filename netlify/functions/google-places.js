
// Netlify serverless function to proxy Google Places API requests

exports.handler = async function(event, context) {
  try {
    const { placeId } = JSON.parse(event.body);
    const apiKey = process.env.GOOGLE_API_KEY || 'AIzaSyAQFZJxKUB3zNqCkaLgHtJSrb-qw9fappg';
    
    if (!placeId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Place ID is required' })
      };
    }
    
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
