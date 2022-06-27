import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
        {navItems.map((item)=>(
            <div key={item.id} className="group">
                <Link to="" href="" className={styles.link}><a>{item.title}</a>
            
                </Link>
                {item.subtitle &&  <div className="hidden group-hover:block hover:block duration-500"><div className="w-4 h-4 bg-white rotate-45 absolute  top-[104px] ml-4"></div><div className="absolute top-28 bg-white p-10"> oui</div></div>
                

                }

            </div>
            
        ))}
    </nav>
  )
}


export default Navbar

const navItems =[
    {id:1,title:'Acceuil'},
    {id:2,title:'Services', subtitle:true, sub:'TopGear'},
    {id:3,title:'Contacts'},
]
const styles={
    wrapper:'max-w-6xl mx-auto bg-red-300 py-12 px-6 flex items-center justify-between',
    link:'px-8 py-4'
}