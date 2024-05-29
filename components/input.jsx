import PropTypes from 'prop-types'

export default function Input({ type, placeholder, setValue, value, name, required, className }) {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
      name={name}
      required={required}
      className={`
        ${className}
        border-grey
        border-2
        px-4
        py-1
        w-full
        duration-300
        focus:outline-red
      `}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
}