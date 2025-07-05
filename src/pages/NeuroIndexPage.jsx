import { useState } from 'react';
import listings from '../data/listings';
import ListingCard from '../components/ListingCard';
import SearchAndFilter from '../components/SearchAndFilter';

export default function NeuroIndexPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredListings = listings.filter((listing) =>
    [listing.title, listing.description, listing.location]
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Neuro Index</h1>
      <SearchAndFilter searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
