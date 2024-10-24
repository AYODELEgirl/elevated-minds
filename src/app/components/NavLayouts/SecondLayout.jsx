import React from 'react'

function SecondLayout({btn, children}) {
  return (
    <div className="bg-white mx-4" style={{borderRadius: "1.5rem 1.5rem 0 0 "}}>
      <div>{children}</div>
      {btn && <div bg>Make a donation</div>}
    </div>
  )
}

export default SecondLayout
