import { useState, useEffect } from "react";
import { Star, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface GoogleReview {
  id: string;
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
}

// const PLACE_ID = "ChIJERqF6vKHJY8RKVn-N2hfI70"; // Replace with your actual Google Place ID

// const Testimonials = () => {
//   const [reviews, setReviews] = useState<GoogleReview[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const { toast } = useToast();

//   // Local fallback testimonials if API fails
//   const fallbackTestimonials = [
//     {
//       id: "1",
//       author_name: "Michael Johnson",
//       profile_photo_url: "/images/testimonial-1.jpg",
//       rating: 5,
//       text: "Detail Pros transformed my boat from weathered to wonderful. Their ceramic coating has made maintenance so much easier in the salt water.",
//       time: new Date().getTime()
//     },
//     {
//       id: "2",
//       author_name: "Sarah Williams",
//       profile_photo_url: "/images/testimonial-2.jpg",
//       rating: 5,
//       text: "The STEK PPF they installed on my Porsche is flawless. After a year in the Caribbean sun, the paint still looks brand new.",
//       time: new Date().getTime()
//     },
//     {
//       id: "3",
//       author_name: "David Thompson",
//       profile_photo_url: "/images/testimonial-3.jpg",
//       rating: 5, 
//       text: "I've tried several detailers in Grand Cayman, but Detail Pros is simply the best. Their ceramic coating work is spectacular.",
//       time: new Date().getTime()
//     }
//   ];

//   useEffect(() => {
//     const fetchGoogleReviews = async () => {
//       setIsLoading(true);
//       try {
//         // Try to use the server-side proxy
//         const isNetlify = window.location.hostname.includes('netlify.app');
//         const isVercel = window.location.hostname.includes('vercel.app');
        
//         let proxyUrl;
        
//         if (isNetlify) {
//           proxyUrl = '/.netlify/functions/google-places';
//         } else if (isVercel) {
//           proxyUrl = '/api/google-places';
//         } else {
//           // For local development or other platforms
//           proxyUrl = '/api/google-places'; // Default to Vercel-style path
//         }
        
//         // Make the request to our serverless function
//         const response = await fetch(proxyUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ placeId: PLACE_ID }),
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch reviews');
//         }
        
//         const data = await response.json();
        
//         // Check if we have valid reviews data
//         if (data.result && data.result.reviews && data.result.reviews.length > 0) {
//           // Transform the Google reviews to match our interface
//           const googleReviews = data.result.reviews.map((review: any) => ({
//             id: review.time.toString(),
//             author_name: review.author_name,
//             profile_photo_url: review.profile_photo_url,
//             rating: review.rating,
//             text: review.text,
//             time: review.time,
//           }));
          
//           setReviews(googleReviews);
//         } else {
//           // If no reviews found, use fallback
//           console.log("No reviews found in API response, using fallbacks");
//           setReviews(fallbackTestimonials);
//         }
//       } catch (error) {
//         console.error("Error fetching Google reviews:", error);
//         toast({
//           title: "Unable to load Google reviews",
//           description: "Showing our featured testimonials instead.",
//           variant: "destructive",
//         });
//         setReviews(fallbackTestimonials);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchGoogleReviews();
//   }, [toast]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Check out our Google reviews from satisfied
            customers across the Cayman Islands.
          </p>
        </div>
        
        {isLoading ? (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md h-64">
                  <div className="flex items-center mb-4">
                    <Skeleton className="w-12 h-12 rounded-full mr-3" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {reviews.map((review) => (
                  <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img 
                            src={review.profile_photo_url || "/placeholder.svg"} 
                            alt={review.author_name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{review.author_name}</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16}
                                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4 flex-grow">
                        <p className="text-gray-700 italic">"{review.text}"</p>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mt-auto">
                        <MessageCircle size={14} className="mr-1" />
                        <span>Google Review</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
            
            {/* Mobile navigation dots */}
            <div className="flex justify-center mt-8 md:hidden">
              {reviews.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full bg-gray-300`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
