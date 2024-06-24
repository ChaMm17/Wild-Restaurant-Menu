import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
    //console.log(foodItems);
    return (
        <>
            {/*render a MenuItem component to each element of the props array*/}
            {foodItems.map((props, i) => (
                <MenuItem key={foodItems.itemName} props={props} />
            ))

            }
        </>
    );
}

export default MenuList;