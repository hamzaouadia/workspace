export default function Hours() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold">Hours</h4>
        <ul className="mt-2 text-sm text-gray-700">
          <li>Mon–Fri: 9:00 — 21:00</li>
          <li>Sat: 10:00 — 22:00</li>
          <li>Sun: 10:00 — 20:00</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Contact</h4>
        <p className="mt-2 text-sm text-gray-700">123 Main St, Hometown</p>
        <p className="text-sm text-gray-700 mt-1">Phone: <a href="tel:+1234567890" className="text-amber-600">+1 (234) 567-890</a></p>
      </div>
    </div>
  )
}
