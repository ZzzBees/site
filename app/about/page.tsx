import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-800">About Zzz Bees</h1>
      
      {/* <div className="mb-8">
        <Image
          src="/beekeepers.jpg"
          alt="Zzz Bees Founders"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div> */}
      
      <p className="text-lg mb-6">
        Founded in 2024, Zzz Bees began after purchasing two nucleus colonies
        from Shenandoah Bee Supply in Spring 2023. Having successfully guided
        both colonies through their first winter, we discovered the importance
        of swarm management, and found great joy in the art and science of
        beekeeping.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Our Mission</h2>
      <p className="text-lg">
        Simple: to provide high-quality bee products to our
        community, sustain our growing apiary, and do this in a way that is
        pleasing to our Lord and Savior Jesus Christ.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Our Commitment</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Maintaining ethical and sustainable beekeeping practices</li>
        <li>Producing premium, raw, and unfiltered honey</li>
        <li>Reinvesting in our apiary to expand and improve our colonies</li>
      </ul>
      
      <p className="text-lg font-medium text-yellow-800">
        Join us in celebrating the miracle of bees and enjoying the sweet rewards of beekeeping!
      </p>
    </div>
  );
}