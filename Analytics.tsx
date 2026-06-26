export default function Analytics() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">
        Protocol Analytics
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mt-12">
        <div className="border rounded-xl p-6">
          TVL
        </div>

        <div className="border rounded-xl p-6">
          Open Interest
        </div>

        <div className="border rounded-xl p-6">
          Markets
        </div>

        <div className="border rounded-xl p-6">
          Volume
        </div>
      </div>
    </section>
  );
}
