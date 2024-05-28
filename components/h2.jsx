import PropTypes from 'prop-types';

export default function H2({ children, hidden, className }) {
  return (
    <h2 
      className={`
        title
        text-2xl
        font-bold
        text-gray-900
        ${hidden && 'title-hidden'}
        ${className}
      `}
    >
      {children}
    </h2>
  )
}

H2.propTypes = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  className: PropTypes.string
}