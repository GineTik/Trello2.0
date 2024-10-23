import { GoPlus } from 'react-icons/go'
import styles from "./ListViewAddItem.module.scss"

const ListViewAddItem = () => {
  return (
    <div className={styles.item}>
      <GoPlus />
      New
    </div>
  )
}

export default ListViewAddItem
