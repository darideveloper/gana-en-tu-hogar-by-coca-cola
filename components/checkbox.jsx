import PropTypes from 'prop-types'

export default function Checkbox ({ children, name, required, className }) {
  return (
    <label
      className={`
        ${className}
      `}
    >
      <input 
        type="checkbox"
        name={name}
        required={required}
        className={`
          mx-2
        `}
      />
      {children}
    </label>
  )
}

Checkbox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
}