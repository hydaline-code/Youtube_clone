import React from 'react';
import SidebarButton from './SidebarButton';
import '../styles/sidebar.css';
import { sidebarMenuData } from '../utils/sidebarData';

export default function Sidebar() {
   
  return (
    <aside className='font-sans sidebar text-stone-900 text-xs p-1 overflow-x-hidden'>
        <div className="buttons ml-4">
          { sidebarMenuData.map((menuitem, index)=> (
            <React.Fragment key={menuitem.id}>
              <SidebarButton 
                  label={menuitem.label}
                  icon={menuitem.icon}
                  subcategories={menuitem.subcategories}
                  className={menuitem?.active ? 'side-btn' :  ' ' }
              />
              {index > 1 && <hr className="border-gray-300" /> }
            </React.Fragment>
          ))}
      </div>

        <div className='p-2 text-xs m-1 mb-4 pr-1'>
          <p className='p-1 font-sans text-stone-900'>
            Présentation Presse Droits <br />
            d&apos;auteur Nous contacter <br />
            Créateurs Publicité <br /> Développeurs <br />
            Conditions d&apos;utilisation  <br /> Confidentialité Règles 
            et sécurité <br />Premiers pas sur YouTubeTester <br /> de nouvelles fonctionnalités
          </p>
        </div>
    </aside>
  )
}
