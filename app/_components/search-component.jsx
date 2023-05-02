'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchComponent() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  function changeSearchValue(event) {
    setSearchValue(event.target.value)
  }

  function submit(event) {
    event.preventDefault()
    router.push(`/?search=${searchValue}`)
  }

  return (
    <div>
      <h2 className=''>Search for a specific recipe:</h2>
      <form onSubmit={submit}>
        <input type='text' value={searchValue} onChange={changeSearchValue} />
        <button type='submit'>search</button>
      </form>
    </div>
  )
}