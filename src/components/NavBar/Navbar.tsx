import { useState } from 'react'
import styles from './styles.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#top' },
    { label: 'Menu', href: '#menu' },
    { label: 'Hours', href: '#hours' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`${styles['navbar-sticky']} ${styles['navbar-accent']} sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#top" className={`${styles['navbar-logo']} ${styles['restaurant-heading']} text-2xl font-bold text-gray-900 hover:text-amber-600 inline-block`}>
              AtayCafé
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles['nav-link']} text-gray-700 hover:text-amber-600 font-medium`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="tel:+1234567890"
              className={`${styles['reserve-btn']} text-white px-5 py-2 rounded-md font-medium`}
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`${styles['hamburger-line']} h-0.5 w-full bg-gray-900 rounded ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`${styles['hamburger-line']} h-0.5 w-full bg-gray-900 rounded ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`${styles['hamburger-line']} h-0.5 w-full bg-gray-900 rounded ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles['mobile-menu']} md:hidden bg-white border-t border-gray-200 ${
          isOpen ? styles['open'] : ''
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`${styles['mobile-menu-item']} block py-2 text-gray-700 hover:text-amber-600 transition font-medium border-b border-gray-100 last:border-0`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+1234567890"
            className={`${styles['mobile-menu-item']} ${styles['reserve-btn']} block text-center text-white px-5 py-3 rounded-md font-medium mt-4`}
          >
            Reserve Table
          </a>
        </div>
      </div>
    </nav>
  )
}
