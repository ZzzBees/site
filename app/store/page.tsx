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
          <p className="text-xl font-semibold">
            We need you to buy our honey so we can keep more bees!
          </p>
          <p className="text-lg mt-1">
            Reach us at <a href="mailto:zzzbeesva@gmail.com" className="underline text-blue-800 hover:text-blue-600">zzzbeesva@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
