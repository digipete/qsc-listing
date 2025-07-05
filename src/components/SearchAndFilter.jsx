export default function SearchAndFilter({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name, description or location..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full px-4 py-2 border rounded mb-4"
    />
  );
}
