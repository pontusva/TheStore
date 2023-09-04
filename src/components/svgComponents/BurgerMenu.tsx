type BurgerMenuProps = {
  toggleMenu: () => void
  isMenuOpen: boolean
}

const BurgerMenu = ({
  toggleMenu,
  isMenuOpen
}: BurgerMenuProps) => {
  return (
    <svg
      onClick={toggleMenu}
      width="44px"
      height="44px"
      viewBox="0 0 12 12"
      enableBackground="new 0 0 12 12"
      id="Слой_1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect
          fill={isMenuOpen ? '#FAF9F9' : 'text-[#1C1C1E] '}
          height="1"
          width="11"
          x="0.5"
          y="5.5"
        />
        <rect
          fill={isMenuOpen ? '#FAF9F9' : 'text-[#1C1C1E]'}
          height="1"
          width="11"
          x="0.5"
          y="2.5"
        />
        <rect
          fill={isMenuOpen ? '#FAF9F9' : 'text-[#1C1C1E]'}
          height="1"
          width="11"
          x="0.5"
          y="8.5"
        />
      </g>
    </svg>
  )
}

export default BurgerMenu
