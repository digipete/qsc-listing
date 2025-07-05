import { useParams } from 'react-router-dom';
import listings from '../data/listings';

export default function ListingDetailPage() {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === id);

  if (!listing) return <div className="p-8">Listing not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover mb-4 rounded" />
      <h1 className="text-3xl font-bold">{listing.title}</h1>
      <p className="mt-2 text-gray-600">{listing.description}</p>
      <p className="mt-2">🧠 Neuro Score: {listing.neuroScore}</p>
      <p>⭐ User Rating: {listing.userRating}</p>
    </div>
  );
}
