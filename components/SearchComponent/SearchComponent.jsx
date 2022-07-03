import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './SearchComponent.module.css'

export default function SearchComponent() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  function changeSearchValue(event) {
    setSearchValue(event.target.value)
  }

  function submit(event) {
    event.preventDefault()
    router.push(`/recipes/?search=${searchValue}`)
  }

  return (
    <div className={styles.container}>
      <h2 className='tags'>Search for a specific recipe:</h2>
      <form className={styles.form} onSubmit={submit}>
        <input type='text' value={searchValue} onChange={changeSearchValue} />
        <button type='submit'>search</button>
      </form>
    </div>
  )
}
