export default function Hero() {
    return (
      <>
        <div className="flex">
          <div className="flex-1">
            <div className='container mx-auto py-12 px-4'>
              <h1 className='text-xl text-white font-bold mb-4'>
                Welcome to StatusQuo
              </h1>
              <p className='text-5xl mb-6 font-bold text-white'>
                Focus on Innovation, Leave the Progress Tracking to Us
              </p>
              <p className='text-lg text-white mb-8'>
                Your AI-Powered Project Manager Tracking Progress From GitHub Repositories
              </p>
              {/* Buttons container with Flexbox layout */}
              <div className="flex space-x-4">
                <button className='bg-neonBlue text-blue-900 py-2 px-4 rounded-lg text-sm font-extrabold'> {/* Filled button */}
                  Get Started
                </button>
                <button className='bg-transparent border border-neonBlue text-neonBlue font-semibold py-2 px-4 rounded-lg text-sm'> {/* Unfilled button */}
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="./gifs/hero.gif" className="h-96 ml-24 mt-12" alt=""/>
          </div>
        </div>
      </>
    )
  }
  