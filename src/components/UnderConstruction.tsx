export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-yellow-500 rounded-lg">
      <div className="flex items-center gap-3">
        <svg
          className="w-8 h-8 text-yellow-500 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a9 9 0 1 1-1.942-9.428"
          />
        </svg>
        <span className="text-yellow-500 text-xl font-light">
          Under Construction
        </span>
      </div>
      <p className="text-white/70 text-base font-light">
        This section is currently being built. Check back soon!
      </p>
    </div>
  );
}
