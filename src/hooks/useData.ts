import {useState, useEffect} from 'react'
import {CanceledError, AxiosRequestConfig} from 'axios'
import apiClient from '../services/api-client';

interface FetchResponse<T> {
    count: number;
    results: T[]
}

const useData = <T>(param: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    apiClient.get<FetchResponse<T>>(param, {signal: controller.signal, ...requestConfig})
    .then(res => {
      setData(res.data.results)
      setLoading(false)
    })
    .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
    })
  }, deps ? [...deps] : [])
  return {data, error, loading}
}

export default useData