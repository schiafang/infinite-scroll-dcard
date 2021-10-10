import axios from 'axios'
import { useState, useEffect, useReducer } from 'react'

function reducer(state, action) {
  const idRecord = [...new Set(state.map((i) => i.id))]
  return [...state, ...action.filter((i) => !idRecord.includes(i.id))]
}

const useFetchData = (query) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await axios({
          url: 'http://localhost:8080/',
          params: query ? { popular: true, before: query } : { popular: true },
          mode: 'cors',
        })
        dispatch(response.data)
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
