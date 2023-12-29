import React from 'react'

const Header = (props) => {
  return (
    <>
        <h4>Hello</h4>
        {props.children}
    </>
  )
}

export default Header