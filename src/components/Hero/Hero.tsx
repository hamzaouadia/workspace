export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-amber-400 to-rose-400 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AtayCafé</h1>
        <p className="text-lg md:text-xl mb-6">Fresh local flavors — breakfast, lunch & dinner</p>
        <div className="flex items-center justify-center gap-4">
          <a href="tel:+1234567890" className="bg-white text-amber-600 px-6 py-3 rounded font-semibold">Call to Reserve</a>
          <a href="#menu" className="border border-white px-6 py-3 rounded">View Menu</a>
        </div>
      </div>
    </header>
  )
}
