"use client"

import Link from 'next/link';
import { useState } from 'react';
import { menuItems } from '@/helper/constants';
import { Tooltip } from '@mui/material';
import React from 'react';

const Container = ({ children, id = 1 }) => {

    const [ expand, setExpand ] = useState(false);
    const [ activeId, setActiveId ] = useState(id);

    // const handleExpandMenu = () => setExpand(!expand);

    const handleMenuItem = (id) => setActiveId(id);

    return (

        <>

            <div className='flex h-full'>

                <aside className={`relative z-20 sidebar-menu transition-all duration-300 ${expand ? 'md:w-[320px] w-[70px]' : 'w-0 md:w-[70px]'}`}>

                    {/* <div>

                        <div onClick={handleExpandMenu} className='cursor-pointer absolute right-[-30px] z-10 md:right-[-15px] top-[50px] rounded-full border-none p-2 w-[50px] md:w-[30px] h-[30px] flex justify-end md:justify-center items-center text-white' style={{ border: '2px solid white', backgroundColor: '#0066FF' }}>
                            <MdOutlineArrowForwardIos className={`${expand && 'rotate-180'} w-3 h-3 md:w-5 md:h-5 transition-all duration-300`} />
                        </div>

                    </div> */}

                    <div className={`m-4 flex flex-col ${expand ? 'items-start m-4' : 'items-center'} text-white`}>

                        <div className={`${expand && 'w-full flex flex-col items-center'} overflow-y-scroll hide-scrollbar h-[390px]`} >

                            {menuItems.map((v) => (

                                    <Link href={v.link} key={v.id} className={`cursor-pointer transition-all duration-300 flex ${expand ? 'w-full' : 'hidden md:flex w-[40px] h-[40px] justify-center'} gap-5 items-center p-[0.4rem] m-2 rounded-md`} style={{ background: v.id === activeId ? '#5d9dfe' : 'transparent' }} onClick={() => handleMenuItem(v.id)}>
                                        <Tooltip placement="right-start" title={v.name}><div><v.Icon size={25} color='white' /></div></Tooltip>
                                        <div className={`${expand ? 'hidden md:block' : 'hidden'} text-nowrap`}>{v.name}</div>
                                    </Link>

                            ))}


                        </div>

                    </div>

                </aside>

                <section className={`md:p-8 p-2 w-full overflow-x-hidden ${id === 0 ? 'bg-[#F8F8F8]' : 'bg-transparent'}`}>

                    <div className='h-full overflow-y-auto flex flex-col justify-between'>{children}</div>

                    {/* <div className={`h-[5%] flex justify-center items-center ${id === 0 ? 'bg-[#F8F8F8]' : 'bg-white'} w-[100%] text-sm font-extralight text-center tracking-[1px]`}>
                       <p> Powered by <strong> holbox.ai</strong> </p>
                    </div> */}

                </section>

            </div>

        </>
        
    )

}

export default Container