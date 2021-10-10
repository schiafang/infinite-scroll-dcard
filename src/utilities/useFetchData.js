import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetchData = (query) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await axios({
          url: 'http://localhost:8080/',
          params: query ? { popular: true, before: query } : { popular: true },
          mode: 'cors',
        })
        setData((pre) => [...pre, ...response.data])
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [query])

  return { isLoading, data }
}

export default useFetchData
