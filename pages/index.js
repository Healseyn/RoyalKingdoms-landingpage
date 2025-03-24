import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [openQuestion, setOpenQuestion] = useState(null)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const toggleQuestion = (questionIndex) => {
    if (openQuestion === questionIndex) {
      setOpenQuestion(null)
    } else {
      setOpenQuestion(questionIndex)
    }
  }

  return (
    <div>
      <Head>
        <title>Royal Kingdoms - Real-Time Strategy Game</title>
        <meta
          name="description"
          content="Royal Kingdoms is a real-time strategy game inspired by classics like Tribalwars and Ikariam, with blockchain integration."
        />
        <link rel="icon" href="images/logo.png" type="image/x-icon" />
      </Head>

      <main className="bg-neutral min-h-screen font-cinzel">
        {/* Header */}
        <header className="bg-secondary shadow relative">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
            {/* LEFT */}
            <nav className="hidden md:flex space-x-4">
              <a href="#features" className="text-neutral hover:text-primary transition duration-300">Features</a>
              <a href="#roadmap" className="text-neutral hover:text-primary transition duration-300">Roadmap</a>
              <a href="https://docs.royalkingdoms.xyz/" className="text-neutral hover:text-primary transition duration-300">Docs</a>
            </nav>

            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 md:-top-5 z-50">
              <Image
                src="/images/logo.png"
                alt="Royal Kingdoms Logo"
                width={160}
                height={160}
                className="z-50"
              />
            </div>

            {/* RIGHT */}
            <nav className="hidden md:flex space-x-4">
              <a href="#token-sale" className="text-neutral hover:text-primary transition duration-300">Token Sale</a>
              <a href="#community" className="text-neutral hover:text-primary transition duration-300">Community</a>
              <a
                href="https://x.com/RkingdomsSol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-primary transition duration-300"
              >
                Twitter
              </a>
              <a
                href="https://discord.gg/ScgrQRuub3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-primary transition duration-300"
              >
                Discord
              </a>
            </nav>

            {/* Menu Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral focus:outline-none">
                {/* Ícone do Menu Hambúrguer */}
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile Responsivo */}
          {isMenuOpen && (
            <div className="md:hidden bg-secondary p-4 absolute w-full transition-transform duration-300 transform ease-in-out z-40">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-neutral hover:text-primary transition duration-300">Features</a>
                <a href="#roadmap" className="text-neutral hover:text-primary transition duration-300">Roadmap</a>
                <a href="https://docs.royalkingdoms.xyz/" className="text-neutral hover:text-primary transition duration-300">Docs</a>
                <a href="https://gofundmeme.io/campaigns/VpvVnHVCpT1uWsGCkJRdH2jVtfASjrwMpYns1eSGGFM" className="text-neutral hover:text-primary transition duration-300">Token Sale</a>
                <a href="#community" className="text-neutral hover:text-primary transition duration-300">Community</a>
                <a href="https://x.com/RkingdomsSol" target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-primary transition duration-300">Twitter</a>
                <a href="https://discord.gg/ScgrQRuub3" target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-primary transition duration-300">Discord</a>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-primary">Welcome to Royal Kingdoms</h2>
          <p className="text-secondary mt-4 text-lg">A real-time strategy game with blockchain integration, inspired by classics.</p>
          {/* Hero Image */}
          <div className="mt-8 flex justify-center" data-aos="zoom-in">
            <Image
              src="/images/hero-image.png"
              alt="Royal Kingdoms Hero Image"
              width={1000}
              height={400}
              className="rounded-md border-2 border-secondary shadow-xl"
            />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <a href="https://beta-play.royalkingdoms.xyz/" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition duration-300">
                Play Now
              </button>
            </a>
            <a href="https://gofundmeme.io/campaigns/VpvVnHVCpT1uWsGCkJRdH2jVtfASjrwMpYns1eSGGFM" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-primary transition duration-300">
                Buy Now
              </button>
            </a>
          </div>

        </section>


        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-primary text-center">Key Features</h2>
          <div className="mt-8 flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4 text-center" data-aos="fade-right">
              <Image src="/images/unique-setting.png" alt="Unique Setting" width={60} height={60} className="mx-auto rounded-md  " />
              <h3 className="text-xl font-bold text-primary mt-4">Unique Setting</h3>
              <p className="text-secondary mt-2">A map that resets every 30 days due to climatic events, offering a constantly renewed experience.</p>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center" data-aos="fade-up">
              <Image src="/images/blockchain-integration.png" alt="Blockchain Integration" width={60} height={60} className="mx-auto rounded-md " />
              <h3 className="text-xl font-bold text-primary mt-4">Blockchain Integration</h3>
              <p className="text-secondary mt-2">Use your Solana wallet for authentication and interact with tokens within the game.</p>
            </div>
            <div className="w-full md:w-1/3 p-4 text-center" data-aos="fade-left">
              <Image src="/images/deep-economy.png" alt="Deep Economy" width={60} height={60} className="mx-auto rounded-md " />
              <h3 className="text-xl font-bold text-primary mt-4">Deep Economy</h3>
              <p className="text-secondary mt-2">Manage resources, evolve your colonies, and trade for tokens to gain advantages in upcoming cycles.</p>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="bg-secondary py-16" data-aos="fade-up">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary">Roadmap</h2>
            <div className="mt-8 flex flex-col md:flex-row justify-center">
              <div className="md:w-1/4 p-4 transition duration-500 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-neutral">March 23, 2025</h3>
                <p className="text-neutral mt-2">Official Beta Launch</p>
              </div>
              <div className="md:w-1/4 p-4 transition duration-500 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-neutral">March 23, 2025</h3>
                <p className="text-neutral mt-2">Token Launch on gofundmeme.io</p>
              </div>
              <div className="md:w-1/4 p-4 transition duration-500 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-neutral">April 2025</h3>
                <p className="text-neutral mt-2">Gameplay Enhancements and Community Feedback Integration</p>
              </div>
              <div className="md:w-1/4 p-4 transition duration-500 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-neutral">April 2025</h3>
                <p className="text-neutral mt-2">Token game integration</p>
              </div>
              <div className="md:w-1/4 p-4 transition duration-500 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-neutral">Q2 2025</h3>
                <p className="text-neutral mt-2">Season 1 start</p>
              </div>
            </div>
          </div>
        </section>
        {/* About the Game Section */}
        <section id="about" className="container mx-auto px-6 py-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-primary text-center">About Royal Kingdoms</h2>
          <p className="text-secondary mt-4 text-lg text-center">
            Royal Kingdoms is a real-time strategy game that allows players to build and expand their empires,
            gather resources, and engage in strategic battles. Players start in the Royal City and colonize
            different areas on the map. Resources are essential for building and upgrading, and the game&apos;s
            economy is deeply integrated with blockchain technology.
          </p>
          <p className="text-secondary mt-4 text-lg text-center">
            The game features a variety of resources that players must manage to ensure the growth of their
            empire. Below is a list of all the resources available in the game.
          </p>

          {/* Resources Section */}
          <div className="mt-12 flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/4 p-4 text-center" data-aos="zoom-in">
              <Image src="/images/resources/wood.png" alt="Wood" width={80} height={80} className="mx-auto" />
              <h3 className="text-lg font-bold text-primary mt-2">Wood</h3>
              <p className="text-secondary">Used for construction and building upgrades.</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center" data-aos="zoom-in">
              <Image src="/images/resources/stone.png" alt="Stone" width={80} height={80} className="mx-auto" />
              <h3 className="text-lg font-bold text-primary mt-2">Stone</h3>
              <p className="text-secondary">Essential for fortifications and certain structures.</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center" data-aos="zoom-in">
              <Image src="/images/resources/iron.png" alt="Iron" width={80} height={80} className="mx-auto" />
              <h3 className="text-lg font-bold text-primary mt-2">Iron</h3>
              <p className="text-secondary">Needed for advanced buildings and weaponry.</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center" data-aos="zoom-in">
              <Image src="/images/resources/food.png" alt="Food" width={80} height={80} className="mx-auto" />
              <h3 className="text-lg font-bold text-primary mt-2">Food</h3>
              <p className="text-secondary">Sustains your population and troops.</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center" data-aos="zoom-in">
              <Image src="/images/resources/tools.png" alt="Tools" width={80} height={80} className="mx-auto" />
              <h3 className="text-lg font-bold text-primary mt-2">Tools</h3>
              <p className="text-secondary">Used to enhance building efficiency.</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center" data-aos="zoom-in">
              <Image src="/images/resources/luxury.png" alt="Luxury" width={80} height={80} className="mx-auto" />
              <h3 className="text-lg font-bold text-primary mt-2">Luxury</h3>
              <p className="text-secondary">Increases happiness and boosts morale.</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center" data-aos="zoom-in">
              <Image src="/images/resources/coins.png" alt="Coins" width={80} height={80} className="mx-auto" />
              <h3 className="text-lg font-bold text-primary mt-2">Coins</h3>
              <p className="text-secondary">Used for trading and purchasing resources.</p>
            </div>
            <div className="w-1/2 md:w-1/4 p-4 text-center" data-aos="zoom-in">
              <Image src="/images/resources/crystal.png" alt="Crystal" width={80} height={80} className="mx-auto" />
              <h3 className="text-lg font-bold text-primary mt-2">Crystal</h3>
              <p className="text-secondary">The &apos; token, used for special transactions and blockchain integration.</p>
            </div>
          </div>
        </section>

        {/* Token Sale Section */}
        <section id="token-sale" className="py-16" data-aos="fade-up">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary">Token Launch</h2>
            <p className="text-secondary mt-4">Participate in the token fair launch on solana network and gain exclusive advantages.</p>
            <div className="mt-8 flex justify-center">
              <Image src="/images/gofundmeme.png" alt="Token Sale" width={720} height={360} className="rounded-md border-2 border-secondary shadow-xl transition duration-500 hover:scale-105" />
            </div>
            <a href="https://gofundmeme.io/campaigns/VpvVnHVCpT1uWsGCkJRdH2jVtfASjrwMpYns1eSGGFM" target="_blank" rel="noopener noreferrer">
            <button className="mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              Join the Launch
            </button>
            </a>
          </div>
        </section>
        {/* FAQ Section */}
        <section id="faq" className="bg-secondary py-16" data-aos="fade-up">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
            <div className="mt-8 flex flex-col items-center">

              <div
                className={`w-full md:w-3/4 p-4 text-left bg-secondary rounded-lg shadow-md cursor-pointer transition-all duration-500 border-2 border-primary ${openQuestion === 1 ? 'mb-4' : 'mb-2'
                  }`}
                onClick={() => toggleQuestion(1)}
              >
                <h3 className="text-xl font-bold text-neutral flex justify-between">
                  1. What is Royal Kingdoms?
                  <span>{openQuestion === 1 ? '-' : '+'}</span>
                </h3>
                {openQuestion === 1 && (
                  <p className="text-neutral mt-2 transition-all duration-500 ease-in-out">
                    Royal Kingdoms is a real-time strategy game where players can build and expand their empires, gather resources, and engage in strategic battles. The game integrates blockchain technology for token-based transactions and unique features.
                  </p>
                )}
              </div>


              <div
                className={`w-full md:w-3/4 p-4 text-left bg-secondary rounded-lg shadow-md cursor-pointer transition-all duration-500 border-2 border-primary ${openQuestion === 2 ? 'mb-4' : 'mb-2'
                  }`}
                onClick={() => toggleQuestion(2)}
              >
                <h3 className="text-xl font-bold text-neutral flex justify-between">
                  2. How do I participate in the Fair Launch?
                  <span>{openQuestion === 2 ? '-' : '+'}</span>
                </h3>
                {openQuestion === 2 && (
                  <p className="text-neutral mt-2 transition-all duration-500 ease-in-out">
                    To participate in the fair launch, you can join the event via the gofundmeme platform. Ensure you have a Solana wallet ready to interact with our token launch.
                  </p>
                )}
              </div>


              <div
                className={`w-full md:w-3/4 p-4 text-left bg-secondary rounded-lg shadow-md cursor-pointer transition-all duration-500 border-2 border-primary ${openQuestion === 3 ? 'mb-4' : 'mb-2'
                  }`}
                onClick={() => toggleQuestion(3)}
              >
                <h3 className="text-xl font-bold text-neutral flex justify-between">
                  3. When will the game be officially released?
                  <span>{openQuestion === 3 ? '-' : '+'}</span>
                </h3>
                {openQuestion === 3 && (
                  <p className="text-neutral mt-2 transition-all duration-500 ease-in-out">
                    The beta is officially live as of March 23, 2025. Join now and start building your kingdom!
                  </p>

                )}
              </div>


              <div
                className={`w-full md:w-3/4 p-4 text-left bg-secondary rounded-lg shadow-md cursor-pointer transition-all duration-500 border-2 border-primary ${openQuestion === 4 ? 'mb-4' : 'mb-2'
                  }`}
                onClick={() => toggleQuestion(4)}
              >
                <h3 className="text-xl font-bold text-neutral flex justify-between">
                  4. How can I use my Solana wallet in the game?
                  <span>{openQuestion === 4 ? '-' : '+'}</span>
                </h3>
                {openQuestion === 4 && (
                  <p className="text-neutral mt-2 transition-all duration-500 ease-in-out">
                    Players can use their Solana wallets for authentication, managing in-game transactions, and interacting with blockchain elements such as tokens and NFTs.
                  </p>
                )}
              </div>


              <div
                className={`w-full md:w-3/4 p-4 text-left bg-secondary rounded-lg shadow-md cursor-pointer transition-all duration-500 border-2 border-primary ${openQuestion === 5 ? 'mb-4' : 'mb-2'
                  }`}
                onClick={() => toggleQuestion(5)}
              >
                <h3 className="text-xl font-bold text-neutral flex justify-between">
                  5. What resources are available in the game?
                  <span>{openQuestion === 5 ? '-' : '+'}</span>
                </h3>
                {openQuestion === 5 && (
                  <p className="text-neutral mt-2 transition-all duration-500 ease-in-out">
                    Royal Kingdoms features various resources such as Wood, Stone, Iron, Food, Tools, Luxury, Coins, and Crystal (the game&apos;s token). Managing these resources is crucial for building, upgrading, and strategic gameplay.
                  </p>
                )}
              </div>


            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-primary">Join Our Community</h2>
          <p className="text-secondary mt-4">Join our Discord server and connect with other players.</p>

          {/* Community Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/discord-banner.webp"
              alt="Community"
              width={720}
              height={360}
              className="rounded-md border-2 border-secondary shadow-xl transition duration-500 hover:scale-105"
            />
          </div>

          <a href="https://discord.gg/KbS8PUzEPb" target="_blank" rel="noopener noreferrer">
            <button className="mt-6 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              Join Discord
            </button>
          </a>
        </section>


        {/* Footer */}
        <footer className="bg-secondary py-6">
          <div className="container mx-auto px-6 text-center text-neutral">
            &copy; {new Date().getFullYear()} Royal Kingdoms. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}