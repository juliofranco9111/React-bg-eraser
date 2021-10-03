import React from 'react'
import { Button } from '../components/Button'
import { ImageEmpty } from '../components/ImageEmpty'
import { uploadIcon } from '../icons/icons'

export const ResultPage = () => {
    return (
        <div className='section result__page_section'>
        <>
          <div className='card-image'>
                <ImageEmpty  />
          </div>
          <div className="result__page__buttons_container">
          <Button color='secondary' icon={uploadIcon}>
          Home
          </Button>

          <Button color='secondary' icon={uploadIcon}>
            Download
          </Button>
          </div>
        </>
      </div>
    )
}
