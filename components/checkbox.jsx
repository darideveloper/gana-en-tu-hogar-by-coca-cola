import PropTypes from 'prop-types'

export default function Checkbox ({ name, required, className, children }) {
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
  name: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}