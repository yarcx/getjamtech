import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./header.module.css"
import AvatarPics from "../../public/brock.jpg"
import { useState } from "react"

const Header: NextPage = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  const navBarPopUp = () => {
    setShowSideBar(!showSideBar)
  }
  return (
    <>
      {showSideBar && <div onClick={() => setShowSideBar(!showSideBar)} className="absolute flex items-center justify-center w-64 h-12 text-white origin-top-right transform bg-green-500 border-2 rounded-md left-1/4 top-2/4">A navbar is suppose to popup</div>}
      <div className={`${styles.header} flex justify-between md:justify-end items-center`}>
        {/* Mobile screen hambugger section */}
        <div className={`flex md:hidden  justify-between items-center w-5/12`}>
          <div className="" onClick={navBarPopUp}>
            <svg style={{ fill: '#70757a', width: '24px', height: '24px' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
          </div>
          <div className="flex items-center w-full justify-evenly">
            <span className="px-2 py-3 text-sm text-blue-600 border-b-2 border-blue-600 text-md hover:underline">
              <Link passHref href="#" >
                ALL
              </Link>
            </span>
            <span className="text-sm hover:underline">
              <Link passHref href="#" >
                IMAGES
              </Link>
            </span>
          </div>
        </div>

        {/* Large screen Menu starts here */}
        <nav className="flex items-center justify-between w-3/12 h-full md:w-2/12 ">
          <div className="items-center justify-around hidden w-1/2 md:flex ">
            <span className="text-sm hover:underline">
              <Link passHref href="#" >
                Gmail
              </Link>
            </span>
            <span className="pl-4 text-sm hover:underline">
              <Link passHref href="#">
                Images
              </Link>
            </span>
          </div>

          <div className="flex items-center justify-around flex-1 md:justify-between md:flex-none md:w-2/5 mix-blend-darken ">
            <svg className={`${styles.menuIcon} cursor-pointer hover:shadow-md md:ml-2`} focusable="false" viewBox="0 0 24 24"><path fill="#717479" d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
            <Image className="object-cover rounded-full cursor-pointer hover:shadow-xl mix-blend-darken"
              height="34"
              width="34"
              src={AvatarPics}
              alt="Avatar" />
          </div>
        </nav>
      </div >
    </>
  )
}

export default Header