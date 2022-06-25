import CategoryButton from '../CategoryButton'
import ButtonComponent from '../ButtonComponent'

import styles from './TopCategories.module.css'

export default function TopCategories({ data }) {
  return (
    <div className={styles.container}>
      <h1>
        Check out the top <span className='abril-fatface'>categories</span>
      </h1>
      <CategoryButton data={data} />
      <ButtonComponent title='Look at all categories' link='categories' />
    </div>
  )
}
