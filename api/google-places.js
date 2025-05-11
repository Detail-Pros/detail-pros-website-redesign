
// // Vercel Edge Function to proxy Google Places API requests
// export default async function handler(req, res) {
//   try {
//     const { placeId } = req.method === 'POST' ? JSON.parse(req.body) : req.query;
//     const apiKey = process.env.GOOGLE_API_KEY || 'AIzaSyBrltSXOTrApqRB0-WgUdkM79GoSnbUyxw';
    
//     if (!placeId) {
//       return res.status(400).json({ error: 'Place ID is required' });
//     }
    
//     const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    
//     const response = await fetch(url);
//     const data = await response.json();
    
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     return res.status(200).json(data);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }
