import PropTypes from 'prop-types'

const Button = ({children,onClick,type="button"}) => {
  return (
   <button type={type} onClick={onClick}>{children}</button>
  )
}

Button.propTypes ={
    children : PropTypes.node.isRequired,
    onClick : PropTypes.func,
    type : PropTypes.string
}

export default Button