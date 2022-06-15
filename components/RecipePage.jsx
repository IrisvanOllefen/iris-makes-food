import styles from './RecipePage.module.css'

export default function RecipePage({ data }) {
  // console.log(data.content)

  return (
    <div className={styles.container}>
      <h2>{Object.values(data.recipeCategory)}</h2>
      <h1 className='abril-fatface'>{data.recipeName}</h1>
      <h3>{data.datePublished}</h3>
      <div>
        {data.content.map((content) => {
          console.log(content)
          return (
            <div key={content.id}>
              <div>
                {content.__typename === 'IngredientslistRecord' ? (
                  <div key={content.id} className={styles.listblock}>
                    <h4 className='abril-fatface'>Ingredients</h4>
                    <ul>
                      {content.ingredientsitem.map((ingredients) => {
                        return (
                          <li key={ingredients}>
                            {ingredients.ingredientsitem}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : content.__typename === 'InstructionslistRecord' ? (
                  <div key={content.id} className={styles.listblock}>
                    <h4 className='abril-fatface'>Instructions</h4>
                    <ul>
                      {content.instructionsitem.map((instructions) => {
                        return (
                          <li key={instructions}>
                            {instructions.instructionsitem}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
