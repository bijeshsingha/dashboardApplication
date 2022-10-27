import React from 'react'

import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';

const Sidebar = () => {

  const activeMenu = true;
  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to="/" className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold dark:text-white text-slate-900" onClick={()=>{}}>
            <SiShopware /><span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button type="button" className="text-xl rounded-full p-3 hover:bg-light-gray md:hidden mt-4 block">
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>
      </>)}
    </div>
  )
}

export default Sidebar