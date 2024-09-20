import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-300">About zZz Bees</h1>
      
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-2/3">
          <p className="text-lg mb-6">
            Founded in 2023, zZz Bees began as a humble venture with two nucleus colonies from Shenandoah Bee Supply. Our journey into beekeeping has been a testament to the wonder of God's creation, leaving us in constant awe of these remarkable insects.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Our Story</h2>
          <p className="mb-6">
            What started with two small colonies in the spring of 2023 has grown into a passion for beekeeping and a desire to share the fruits of our labor. We've discovered a profound appreciation for the intricate world of bees and their crucial role in our ecosystem. Our mission is twofold: to provide high-quality bee products to our community and to sustain our growing apiary.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Our Commitment</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Maintaining ethical and sustainable beekeeping practices</li>
            <li>Producing premium, raw, and unfiltered honey</li>
            <li>Reinvesting in our apiary to expand and improve our colonies</li>
            <li>Sharing our journey and knowledge with fellow bee enthusiasts</li>
          </ul>
          
          <p className="text-lg font-medium text-yellow-300">
            Join us in celebrating the miracle of bees and enjoying the sweet rewards of beekeeping!
          </p>
        </div>
        
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <Image
            src="/BeeInspection.jpg"
            alt="About Zzz Bees"
            width={400}
            height={600}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}