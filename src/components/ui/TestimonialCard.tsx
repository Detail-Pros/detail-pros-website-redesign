
interface TestimonialCardProps {
  quote: string;
  name: string;
  position?: string;
  imageUrl?: string;
  rating: number;
}

const TestimonialCard = ({ quote, name, position, imageUrl, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 relative">
      {/* Quotation mark */}
      <div className="absolute -top-5 left-8 text-detailpros-pink text-6xl font-serif opacity-20">
        "
      </div>
      
      {/* Stars based on rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ${i < rating ? 'text-detailpros-pink' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-gray-600 mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        {imageUrl && (
          <div className="mr-4">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          {position && <p className="text-gray-500 text-sm">{position}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
