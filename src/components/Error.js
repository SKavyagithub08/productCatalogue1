export default function Error({ message }) {
  return (
    <div className="backdrop-blur-md bg-red-200/30 text-red-700 border border-red-300 rounded-2xl p-4 shadow-lg mx-auto w-fit animate-fade-in">
      <div className="flex items-center gap-2">
        <span className="text-lg">❗</span>
        <p className="text-sm font-semibold">{message}</p>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
