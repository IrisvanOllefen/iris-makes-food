import CategoryButton from '../CategoryButton'

import styles from './TopCategories.module.css'

export default function TopCategories({ data }) {
  return (
    <div className={styles.container}>
      <h1>Check out the top categories</h1>
      <CategoryButton data={data} />
    </div>
  )
}
