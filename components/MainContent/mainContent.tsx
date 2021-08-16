import type { NextPage } from 'next'
import styles from "./mainContent.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'

const GoogleImage: string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
const perfectEngineersLink: string = "https://perfects.engineering"


type LanguageLinkProps = {
    language: string

}

const LanguageLink = ({ language }: LanguageLinkProps) => (
    <span className={`${styles.mainContentLinks} #1a0dab px-1 text-sm hover:underline`}>
        <Link href="#" passHref>{language}</Link>
    </span>
)


const MainContent: NextPage = () => {
    const [searchWord, setSearchWord] = useState("")
    const router = useRouter()

    const gotoPerfectEngineers: (e: React.MouseEvent<HTMLButtonElement>) => void = (e) => {
        e.preventDefault()
        router.push(perfectEngineersLink)
    }

    const handleSubmittedSearch: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void = (e) => {
        e.preventDefault()
        if (searchWord == '') {
            return
        }
        router.push(`https://google.com/search?q=${searchWord}`)
        setSearchWord("")
    }

    const clearInputFIelt = () => {
        setSearchWord("")
    }

    return (
        <div className={`${styles.mainContent}`}>
            <div className="justify-center hidden md:flex">
                <Image className="hidden object-cover cursor-pointer md:block "
                    height="92"
                    width="272"
                    src={GoogleImage}
                    alt="Avatar" />
            </div>
            <div className="flex justify-center md:hidden">
                <Image className="object-cover cursor-pointer"
                    height="56"
                    width="170"
                    src={GoogleImage}
                    alt="Avatar" />
            </div>
            <form onSubmit={handleSubmittedSearch}>
                <div className={`${styles.inputWrapper} justify-between items-center px-2 flex mx-auto mt-5 mb-4  w-11/12 md:w-5/12 h-11`} >
                    <div className="flex items-center justify-center w-1/12">
                        <svg className={`${styles.inputWrapper_searchIcon}`} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </div>
                    <div className="flex items-center justify-start flex-1 ">
                        <input value={searchWord} onChange={(e) => setSearchWord(e.target.value)} type="text" className={styles.inputWrapper_input} />
                    </div>
                    {searchWord.length > 0 && <div onClick={clearInputFIelt} className="flex items-center justify-center w-1/12">
                        <svg focusable="false" className={`cursor-pointer ${styles.inputWrapper_closeIcon}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                    </div>}
                    <div className="flex items-center justify-center w-1/12">
                        <svg className={`cursor-pointer ${styles.inputWrapper_speakerIcon}`} focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
                    </div>
                </div>
            </form>
            <div className="items-center justify-center hidden w-5/12 h-16 mx-auto md:flex">
                <button onClick={handleSubmittedSearch} className={`${styles.inputWrapper_buttons} hover:shadow hover:border-gray-300 flex items-center justify-center px-3 py-4 mx-2 my-1  h-11`}>Google Search</button>
                <button onClick={gotoPerfectEngineers} className={`${styles.inputWrapper_buttons} hover:shadow hover:border-gray-300 flex items-center justify-center px-3 py-4 mx-2 my-1  h-11`}> Im Feeling Lucky</button>
            </div>

            <div className="flex flex-col items-center justify-center mx-auto mt-8 text-sm text-center md:mt-2 md:w-2/6 md:flex-row h-11">
                <p>Google offered in:</p> <span className="pl-1 mt-3 md:mt-0">
                    <LanguageLink language="Hausa" />
                    <LanguageLink language="Igbo" />
                    <LanguageLink language="Èdè Yorùbá" />
                    <LanguageLink language="Nigerian Pidgin" />
                </span>
            </div>
        </div>
    )
}

export default MainContent