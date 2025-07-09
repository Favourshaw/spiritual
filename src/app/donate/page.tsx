export default function DonatePage() {
  return (
    <main className="min-h-screen bg-pink-50 pt-24 px-4 pb-20 text-center">
      <h1 className="text-4xl font-semibold text-pink-600 mb-6">
        Support Our Mission
      </h1>
      <p className="text-lg text-pink-700 max-w-2xl mx-auto mb-10">
        Your donation helps us continue offering spiritual healing, guidance,
        and peace to others. We appreciate your kindness and energy!
      </p>
      <div className="flex justify-center">
        <a
          href="https://buy.stripe.com/test_donation_link" // Replace with real payment link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
        >
          Donate Now
        </a>
      </div>
    </main>
  );
}
