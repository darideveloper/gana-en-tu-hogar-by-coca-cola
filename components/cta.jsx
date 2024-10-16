import PropTypes from 'prop-types'

export default function Cta({ children, onClick, className }) {
  return (
    <button 
      className={`
        btn
        gradiant
        w-11/12
        text-md xs:text-xl xl:text-2xl
        mx-auto
        px-4
        py-2
        font-bold
        duration-300
        hover:scale-105
        rounded-lg
        ${className}
      `}
      data-aos="fade-up"
      data-aos-delay="600"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Cta.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
}