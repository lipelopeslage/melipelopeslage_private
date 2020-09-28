import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

export const BreadCrumb = ({ props }) => {
  const [steps, setSteps] = useState([])
  useEffect(() => {
    const showStep = props.query || props?.product?.title
    setSteps([
      { text: `${showStep ? 'Início' : null}`, url: '/' },
      {
        text: `${showStep ? 'Resultados de busca' : null}`,
        url: `/items?search=${props?.query || localStorage.getItem('lastSearch') || ''}`
      },
      { text: `${props?.product?.title || null}`, url: `` }
    ])
  }, [props])

  return (
    <aside className='breadcrumb'>
      {steps.map(
        (item) =>
          item.text !== 'null' && (
            <span key={uuid()}>
              <a href={item.url}>{item.text}</a>
            </span>
          )
      )}
    </aside>
  )
}
