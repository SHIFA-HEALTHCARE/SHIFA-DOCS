// Example from https://beta.reactjs.org/learn

import { useRouter } from 'next/router'
import styles from './card.module.css'
const appointments = require('../../../data/api/appointments.json');
const records = require('../../../data/api/records.json');

enum APIS {
  appointments = "appointments",
  records = "records",
  chats = "chats"
}
enum METHODS {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

type APIProperties = {
  name: string
  description: string
  method: METHODS
  query?: string
  params?: string
  body?: string
}

type APIProps = {
  apis: APIProperties[]
}

function APICard({ apis }: APIProps) {

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {apis.map(api => (
        <div key={api.name}>
          {api.name}
        </div>
      ))}
    </div>
  )
}

export default function MyApp() {

  const router = useRouter();

  const apiName = router.pathname.split('/').pop()

  switch (apiName) {
    case APIS.appointments:
      return <APICard apis={appointments} />
    case APIS.records:
      return <APICard apis={records} />
    default:
      router.push('/');
  }
}
