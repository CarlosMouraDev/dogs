import Head from "../../Interface/Head"
import useFetch from "../../Hooks/useFetch"
import { lazy, Suspense, useEffect } from "react"
import { STATS_GET } from "../../Api/api"
import Loading from "../../Interface/Loading"
import Error from "../../Interface/Error"
const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'))

export default function UserStats() {
  const {data, error, loading, req} = useFetch()
  useEffect(() => {
    async function getData() {
      const {url, options} = STATS_GET()
      await req(url, options)
    }
    getData()
  }, [req])

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data) {
    return <Suspense fallback={<div></div>}>
    <Head title="Estatísticas"/>
    <UserStatsGraphs data={data}/>
  </Suspense>
  }
  else return null
  
}