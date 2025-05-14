export default function Error({ message }) {
  return (
    <div className="bg-red-100 text-red-800 p-4 rounded shadow mb-4">
      ⚠️ {message}
    </div>
  );
}
