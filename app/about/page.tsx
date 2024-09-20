import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-300">About zZz Bees</h1>
      
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-2/3">
          <p className="text-lg mb-6">
            Founded in 2024, zZz Bees began after purchasing two nucleas
            colonies from Shenandoah Bee Supply in Spring 2023. Our first
            year was dedicated to preparing them for winter and learning about
            beekeeping. Having successfully brought both colonies through their
            first winter, we soon discovered the importance of swarm management,
            and we continue to find great joy in the art and science of beekeeping.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Our Mission</h2>
          <p className="text-lg mb-6">
            Simple, to provide high-quality bee products to our community,
            sustain our grwoing apiary, and do this in a way that is pleasing to
            our Lord and Savior Jesus Christ.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Our Commitment</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Caring for our bees to the best of our ability</li>
            <li>Producing premium, raw, and unfiltered honey</li>
            <li>Reinvesting in our apiary to expand and improve our colonies</li>
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