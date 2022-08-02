import React from 'react'

const Nav = () => {

    let Links = [
        { name: "Promotion", link: '/promotion' },
        { name: "Flight schedule", link: '/schedule' },
        { name: "About us", link: '/about' },
        { name: "Payment guide", link: '/payment' },

    ];

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-xl cursor-poiner flex items-center font-[Poppins]
            text-gray-800'>

                    Baycungban
                </div>

                <ul className='md:flex md:items-center'>

                    {Links.map((link) => (
                        <li key={link.name} className='md:ml-6 text-base'>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))
                    }

                </ul>
                <label class="block">
                <button class="block w-full text-sm text-slate-500 
                            bg-violet-600 
                            mr-4 py-2 px-4
                            rounded-lg
                            border-00
                            text-sm font-semibold
                            text-white	
                            hover:bg-violet-100 
                            hover:text-violet-500">
                        Booking now
                </button>
                </label>
            </div>
        </div>
    )
}

export default Nav