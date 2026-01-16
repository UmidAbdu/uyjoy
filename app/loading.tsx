export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-primary-500/20 border-t-primary-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              className="w-8 h-8 text-primary-500"
              fill="currentColor"
            >
              <path
                d="M20 4L4 16V36H16V26C16 24.9 16.9 24 18 24H22C23.1 24 24 24.9 24 26V36H36V16L20 4Z"
                fillOpacity="0.3"
              />
              <path
                d="M20 15C18.5 13.5 16 13.5 14.5 15C13 16.5 13 19 14.5 20.5L20 26L25.5 20.5C27 19 27 16.5 25.5 15C24 13.5 21.5 13.5 20 15Z"
              />
            </svg>
          </div>
        </div>
        
        <p className="text-gray-500 font-medium">Loading...</p>
      </div>
    </div>
  )
}
