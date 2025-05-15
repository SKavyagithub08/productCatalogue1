export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 h-40 rounded-xl shadow-inner relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-[shimmer_2s_infinite]"></div>
        </div>
      ))}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
