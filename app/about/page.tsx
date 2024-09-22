import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 lg:space-y-0 lg:flex lg:items-start lg:space-x-8">
      <div className="lg:w-2/3">
        <div className="relative z-10 w-full bg-opacity-80 bg-amber-400 p-6 lg:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center">About zZz Bees</h1>

          <p className="text-lg lg:text-xl mb-4 lg:mb-6">
            Founded in 2024, zZz Bees began after purchasing two nucleus
            colonies from Shenandoah Bee Supply in Spring 2023. Our first
            year was dedicated to preparing them for winter and learning about
            beekeeping. Having successfully brought both colonies through their
            first winter, we soon discovered the importance of swarm management,
            and we continue to find great joy in the art and science of beekeeping.
          </p>
        </div>

        <div className="relative z-10 w-full bg-opacity-80 bg-amber-400 p-6 lg:p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center">Our Mission</h2>

          <p className="text-lg lg:text-xl mb-4 lg:mb-6">
            To provide high-quality bee products to our community, sustain our
            growing apiary, and do all this in a way that is pleasing to our
            Lord and Savior Jesus Christ.
          </p>
        </div>

        <div className="relative z-10 w-full bg-opacity-80 bg-amber-400 p-6 lg:p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center">Our Commitment</h2>

          <ul className="text-lg lg:text-xl list-disc list-inside space-y-2 mb-6">
            <li>Caring for our bees to the best of our ability</li>
            <li>Producing premium, raw, and unfiltered honey</li>
            <li>Reinvesting in our apiary to expand and improve our colonies</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-1/3">
        <Image
          src="/BeeInspection.jpg"
          alt="About Zzz Bees"
          width={400}
          height={600}
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
    </div>
  );
}