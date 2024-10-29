import { ROUTES } from "@/config/routes.config"
import Link from "next/link"
import { TbLayoutDashboardFilled } from "react-icons/tb"
import styles from "./Logo.module.scss"

const Logo = () => {
  return (
    <Link href={ROUTES.HOME} className={styles.logo}>
        <TbLayoutDashboardFilled />
        Trello 2.0
    </Link>
  )
}

export default Logo
