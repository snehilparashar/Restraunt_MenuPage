import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            {menuList.map((currentElement)=>{
                return (
                    <button 
                        className='btn-group__item' 
                        onClick={()=>filterItem(currentElement)}>
                            {currentElement}
                        </button>
                )
            })}
            {/* <button className='btn-group__item'
            onClick={()=>setMenuData(menuData)}>
                All
        </button>  */}
        </div>
    </nav>
    </>
  )
}

export default Navbar