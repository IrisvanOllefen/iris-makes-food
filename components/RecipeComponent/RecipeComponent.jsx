import Image from 'next/image'
import { StructuredText } from 'react-datocms'

import styles from './RecipeComponent.module.css'

export default function RecipePage({ data }) {
  return (
    <div className={styles.container}>
      <h2>{Object.values(data.recipeCategory)}</h2>
      <h1 className='abril-fatface'>{data.recipeName}</h1>
      <h3>{data.datePublished}</h3>
      <div className={styles['main-image']}>
        <Image
          src={data.mainRecipePicture.responsiveImage.srcSet}
          width={data.mainRecipePicture.responsiveImage.width}
          height={data.mainRecipePicture.responsiveImage.height}
          alt={data.mainRecipePicture.responsiveImage.alt}
        />
      </div>
      <div>
        {data.content.map((content) => {
          return (
            <div key={content.id}>
              <div>
                {content.__typename === 'ParagraphRecord' ? (
                  <div className={styles.paragraphblock}>
                    <StructuredText data={content.paragraph} />
                  </div>
                ) : content.__typename === 'IngredientslistRecord' ? (
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
                    <ol>
                      {content.instructionsitem.map((instructions) => {
                        return (
                          <li key={instructions}>
                            {instructions.instructionsitem}
                          </li>
                        )
                      })}
                    </ol>
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
