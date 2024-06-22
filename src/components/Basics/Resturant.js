import React from 'react'
import "./style.css"
import Menu from "./MenuAPI"
import MenuCard from "./MenuCard"
import Navbar from './Navbar.js'

const uniqueList = [...new Set(
    Menu.map((currentElement)=>{
        return currentElement.category;

    
})
),"All"
];

const Restaurants = () => {
    const [menuData,setMenuData] = React.useState(Menu);
    const [menuList] = React.useState(uniqueList) 
    const filterItem = (category) => {

        if (category==="All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currEle) => {
            return currEle.category === category;
        });
        setMenuData(updatedList);
    };

  return (
    <>
    <Navbar filterItem={filterItem} menuList = {menuList} />
    <MenuCard menuData={menuData} />   
    </>
  );
};

export default Restaurants