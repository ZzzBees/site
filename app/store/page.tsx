export default function Store() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <p className="text-xl mb-8 text-center max-w-2xl">
        Exciting news! We are buzzing with anticipation to announce our upcoming products.
      </p>
      <div className="bg-yellow-200 p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Coming Spring/Summer 2025</h2>
        <ul className="list-disc list-inside space-y-3 text-yellow-900 mb-6">
          <li>Delicious, raw local honey</li>
          <li>Healthy nucleus colonies for beekeepers</li>
        </ul>
        <p className="text-yellow-800 font-medium">Stay tuned for more details and pre-order information!</p>
      </div>
    </div>
  );
}
