import { Link } from 'react-router-dom';
import {
  SpeakerXMarkIcon,
  SunIcon,
  LightBulbIcon,
  HomeModernIcon,
  BoltSlashIcon,
} from '@heroicons/react/24/outline';

const amenityIcons = {
  quiet: <SpeakerXMarkIcon className="w-5 h-5" title="Quiet Zone" />,
  natural_light: <SunIcon className="w-5 h-5" title="Natural Light" />,
  no_fluorescent: <LightBulbIcon className="w-5 h-5" title="No Fluorescent" />,
  soundproof: <HomeModernIcon className="w-5 h-5" title="Soundproof" />,
  meditation: <BoltSlashIcon className="w-5 h-5" title="Meditation Space" />,
  ergonomic_chairs: <LightBulbIcon className="w-5 h-5" title="Ergonomic Seating" />,
};

export default function ListingCard({ listing }) {
  return (
    <Link to={`/space/${listing.id}`} className="block border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{listing.title}</h3>
        <p className="text-gray-600 text-sm">{listing.description}</p>
        <div className="mt-2 flex justify-between text-sm">
          <span>🧠 Neuro Score: {listing.neuroScore}</span>
          <span>⭐ {listing.userRating}</span>
        </div>
        <div className="flex gap-2 mt-2">
          {listing.amenities.map(key => (
            <div key={key}>{amenityIcons[key]}</div>
          ))}
        </div>
      </div>
    </Link>
  );
}
