// Example from https://beta.reactjs.org/learn

import { useRouter } from 'next/router'
import { APIS } from '../../../types/enums';
import { APIProps } from '../../../types/interfaces';
import styles from './card.module.css'
const appointments = require('../../../data/api/appointments.json');
const records = require('../../../data/api/records.json');


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
