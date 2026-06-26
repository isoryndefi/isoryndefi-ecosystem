export default function MarketCard() {
  return (
    <section className="max-w-5xl mx-auto py-16">
      <div className="border rounded-xl p-8">
        <h2 className="text-2xl font-bold">
          BTC Above $150K?
        </h2>

        <p className="mt-3">
          Current Probability Curve
        </p>

        <div className="mt-6 h-48 border rounded-lg flex items-center justify-center">
          Curve Chart
        </div>

        <button className="mt-6 px-6 py-3 rounded-lg bg-cyan-600">
          Trade Market
        </button>
      </div>
    </section>
  );
}
