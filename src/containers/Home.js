import './Home.css'
import { useState, useCallback, useRef } from 'react'
import useFetchData from '../utilities/useFetchData'
import ArticleCard from '../components/ArticleCard'
import CardLoading from '../components/CardLoading'

const Home = () => {
  const observer = useRef()
  const [query, setQuery] = useState('')
  const { isLoading, data } = useFetchData(query)

  const lastItemElement = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          let queryId = data[data.length - 1].id
          setQuery(queryId)
        }
      })

      if (node) observer.current.observe(node)
    },
    [isLoading, data]
  )

  return (
    <div className='home-wrapper'>
      {data.length !== 0
        ? data.map((item, index) => {
            return (
              <ArticleCard
                key={index}
                ref={index === data.length - 1 ? lastItemElement : null}
                data={item}
              />
            )
          })
        : null}
      {isLoading && <CardLoading />}
    </div>
  )
}

export default Home
