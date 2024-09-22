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
        <div className="bg-amber-400 text-black p-6 rounded-lg mb-8 text-center">
          <p className="text-xl">
            Exciting news! We are buzzing with anticipation to announce our upcoming products.
          </p>
        </div>
        <div className="bg-amber-800 text-white bg-opacity-90 p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Coming in 2025!</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Spring: Healthy deep 5-frame Nucleus Colonies</li>
            <li>Summer: Delicious, raw local honey</li>
          </ul>
          <p className="font-medium">Stay tuned for more details and pre-order information!</p>
        </div>
      </div>
    </div>
  );
}
