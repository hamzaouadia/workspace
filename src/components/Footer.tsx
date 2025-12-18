export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
        <div className="flex justify-between items-center">
          <p>© {new Date().getFullYear()} Delicioso</p>
          <p>Follow us on <a href="#" className="text-amber-600">Instagram</a></p>
        </div>
      </div>
    </footer>
  )
}
