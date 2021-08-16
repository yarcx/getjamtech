import type { NextPage } from 'next'
import styles from "./footer.module.css"
import Link from 'next/link'

type footerLinkProps = {
    linkName: string
}

const FooterLink = ({ linkName }: footerLinkProps) => (
    <span className={`${styles.footerWrapper_Link}  px-1 text-sm hover:underline`}>
        <Link href="#" passHref>{linkName}</Link>
    </span>
)

const Footer: NextPage = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={`${styles.footerWrapper_top} px-6 flex items-center md:text-left   text-center py-0 md:py-2`}>Nigeria</div>
            <div className={`${styles.footerWrapper_bottom} flex  justify-between items-center  px-6 py-2`}>
                <div className="items-center justify-between hidden w-4/12 pr-12 md:flex-none md:flex">
                    <FooterLink linkName="About" />
                    <FooterLink linkName="Advertising" />
                    <FooterLink linkName="Business" />
                    <FooterLink linkName="How Search works" />
                </div>

                <div className="items-center justify-center flex-1 hidden text-center -ml-9 md:flex ">
                    <FooterLink linkName="Carbon neutral since 2007" />
                </div>
                <div className="flex items-center flex-1 md:flex-none md:w-3/12 justify-evenly md:justify-between ">
                    <FooterLink linkName="Privacy" />
                    <FooterLink linkName="Terms" />
                    <FooterLink linkName="Settings" />

                </div>
            </div>
        </div>
    )
}

export default Footer