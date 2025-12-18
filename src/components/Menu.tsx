export default function Menu() {
  const items = [
    { name: 'Margherita Pizza', desc: 'San Marzano tomatoes, mozzarella, basil', price: '$12' },
    { name: 'Grilled Salmon', desc: 'Lemon butter, seasonal veg', price: '$18' },
    { name: 'House Salad', desc: 'Greens, vinaigrette', price: '$8' },
  ]
  return (
    <div id="menu" className="grid gap-6 sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.name} className="p-4 border rounded">
          <div className="flex justify-between items-baseline">
            <h3 className="font-semibold">{it.name}</h3>
            <span className="text-sm text-gray-600">{it.price}</span>
          </div>
          <p className="text-sm text-gray-700 mt-2">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}
