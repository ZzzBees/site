import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
      <Image
        src="/BeeFrame.jpg"
        alt="Honey background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="relative z-10 max-w-4xl w-full bg-opacity-80 bg-amber-400 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to zZz Bees</h1>
        <p className="text-xl text-black mb-8 text-center">
          Discover the sweet world of beekeeping and honey production with zZz Bees.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/about" className="bg-amber-600 hover:bg-amber-300 text-white hover:text-black font-bold py-2 px-6 rounded-full transition duration-300">
            Learn About Us
          </Link>
          <Link href="/store" className="bg-amber-800 hover:bg-amber-300 text-white hover:text-black font-bold py-2 px-6 rounded-full transition duration-300">
            Visit Our Store
          </Link>
        </div>
      </div>
    </div>
  );
}
