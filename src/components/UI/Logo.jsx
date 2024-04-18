import "./Logo.css"

const Logo = ({variant}) => {
  return (
    <div className={variant==="secondUse" ? "logo secondUse" : "logo"  }>Thrivetalk</div>
  )
}

export default Logo