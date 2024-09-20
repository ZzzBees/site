import Image from 'next/image';

export default function Store() {
  return (
    <div className="relative min-h-screen py-12 px-4">
      <Image
        src="/Honey.jpg"
        alt="Honey background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="bg-white text-black bg-opacity-80 p-6 rounded-lg mb-8 text-center">
          <p className="text-xl">
            Exciting news! We are buzzing with anticipation to announce our upcoming products.
          </p>
        </div>
        <div className="bg-yellow-100 bg-opacity-90 p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Coming Spring/Summer 2025</h2>
          <ul className="list-disc list-inside space-y-3 text-yellow-900 mb-6">
            <li>Delicious, raw local honey</li>
            <li>Healthy nucleus colonies for beekeepers</li>
          </ul>
          <p className="text-yellow-800 font-medium">Stay tuned for more details and pre-order information!</p>
        </div>
      </div>
    </div>
  );
}
