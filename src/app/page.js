export default function Home() {
  return(
      <>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
          <div className="text-center text-white p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-4">Welcome to Diverse Destinations!</h1>
              <p className="text-lg">Your trusted guide to neurodivergent and disability-friendly places.</p>
              <a href="/locations" className="mt-8 inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-white">Explore Locations</a>
          </div>
      </div>
      </>
  )
}