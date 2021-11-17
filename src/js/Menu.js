import React from 'react';
import Button from "./elements/Button";

const Menu = () => {
    return (
        <div className='menu'>
            <div className="menu__settings">
                <form>
                    <Button addClass='menu__button' text='Smart mines'/>
                </form>
            </div>
            <Button addClass='menu__button' text='Start'/>
        </div>
    );
}

export default Menu;