import React from 'react'

const Close = (props) => {
  return (
    <span className="close" onClick={props.onClick}>
        <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="34" height="38.4566" rx="17" fill="white"/>
        <path d="M25.5 9.61414L8.5 28.8424M8.5 9.61414L25.5 28.8424" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </span>
  )
}

export default Close
