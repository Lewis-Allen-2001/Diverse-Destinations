export default function OurMission() {
    return(
        <>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
            <div className="text-center text-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
                <p className="text-lg">Our mission is to provide a platform for users to share their experiences with local businesses and help others make informed decisions.</p>
                <a href="/leaveareview" className="mt-8 inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-white">Leave A Review</a>
            </div>
        </div>
        </>
    )
}