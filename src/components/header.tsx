import { Link } from 'react-router-dom'
import Logo from '../assets/logo600x600.png'

export default function Header() {
  const navItems = ['Home', 'Sobre nós', 'Produtos', 'Contato']

  return (
    <header className='flex w-full fixed top-0 left-0 z-50 bg-white shadow-md px-12 py-4'>
      <div className='flex w-full justify-center items-center'>
        <img src={Logo} alt="logo" width={60} />
        <nav className='w-full flex justify-center items-center'>
          <ul className='flex justify-center items-center gap-8'>
            {navItems.map((item, index) => {
              const href =
                item === 'Home' ? '/' :
                item === 'Sobre nós' ? '#about' :
                item === 'Produtos' ? '/products' :
                item === 'Contato' ? '#contact' :
                '/'

              const isAnchor = href.startsWith('#')

              if (isAnchor) {
                return (
                  <a
                    key={index}
                    href={href}
                    className='relative cursor-pointer group'
                  >
                    <span className="relative z-10">{item}</span>
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        w-0
                        h-0.5
                        bg-orange-500
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    ></div>
                  </a>
                )
              }

              return (
                <Link
                  key={index}
                  to={href}
                  className='relative cursor-pointer group'
                >
                  <span className="relative z-10">{item}</span>
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-0
                      h-0.5
                      bg-orange-500
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></div>
                </Link>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
