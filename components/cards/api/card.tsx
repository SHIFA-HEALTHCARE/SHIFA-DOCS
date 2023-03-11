// Example from https://beta.reactjs.org/learn

import { useRouter } from "next/router";
import { useState } from "react";
import { APIS, PARAMETERS } from "../../../types/enums";
import {
  APIParameterProps,
  APIProps,
  APIResponseProps,
} from "../../../types/interfaces";
import styles from "./card.module.css";
const appointments = require("../../../data/api/appointments.json");
const records = require("../../../data/api/records.json");
const users = require("../../../data/api/users.json");

function APICard({ apis }: APIProps) {

  const [apiVisibility, setApiVisibilty] = useState(false);
  const [responseVisibility, setResponseVisibility] = useState(200);

  return (
    <div>
      {apis.map((apis) => (
        <div key={apis.name}>

          <button onClick={() => setApiVisibilty(!apiVisibility)} style={{ fontSize: "28px", marginTop: "20px" }}>{apis.name} <i className={apiVisibility ? styles.arrowUp : styles.arrowDown}></i></button>

          {apiVisibility &&
            <div style={{ marginTop: "20px" }}>
              <p style={{ marginBottom: "20px" }}>{apis.description}</p>
              {apis.params && (
                <Parameters params={apis.params} name={PARAMETERS.PARAMETERS} />
              )}
              {apis.body && (
                <Parameters params={apis.body} name={PARAMETERS.BODY} />
              )}
              {apis.headers && (
                <Parameters params={apis.headers} name={PARAMETERS.HEADER} />
              )}
              <h1 style={{ fontSize: "24px" }}>Responses</h1>
              <hr />
              <div>

                <div className={styles.statusHeaders}>

                  {apis.responses.map((response) => (
                    <StatusButton status={response.status} visible={responseVisibility} setVisible={setResponseVisibility} />
                  ))}

                </div>
                
                <div style={{marginTop: "20px"}}>
                {apis.responses.map((response) => (
                    <StatusDescription status={response.status} visible={responseVisibility} type={response.type} err={response.err} setVisible={setResponseVisibility}/>
                  ))}
                </div>              

              </div>
            </div>
          }
        </div>
      ))}
    </div>
  );
}

const StatusButton = ({ status, visible, setVisible }: APIResponseProps) => {

  return (
    <button
      style={{ marginTop: "30px", marginRight: "10px" }}
      className={styles.status}
      onClick={() => visible === status ? setVisible(-1) : setVisible(status)}
    >
      {status}
      <i style={{ marginLeft: "10px" }} className={visible === status ? styles.arrowUp : styles.arrowDown}></i>
    </button>
  )
}

const StatusDescription = ({ type, err, status, visible }: APIResponseProps) => {
  return (
    <>
      {visible === status &&
        <p>
          {type ? type : err}
        </p>}
    </>
  )
}

const Parameters = ({ params, name }: APIParameterProps) => {

  return (
    <div style={{ marginBottom: "20px" }}>
      <h1 style={{ fontSize: "24px" }}>{name}</h1>
      <hr />

      <div>
        {params.map((params) => (
          <div key={params.name} style={{ fontSize: "14px" }}>
            <br />

            <div>
              <h1 style={{ fontSize: "18px", fontWeight: "bolder" }}>{params.name}</h1>
            </div>

            <div>
              <span className={styles.filler}>type: </span> {params.type}
              <br />
              <span style={{ marginTop: "5px", marginBottom: "5px" }} className={styles.filler}>example: </span> {params.example}

              <br />
              <span className={styles.filler}>description: </span> {params.description}
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MyApp() {
  const router = useRouter();

  const apiName = router.pathname.split("/").pop();

  switch (apiName) {
    case APIS.appointments:
      return <APICard apis={appointments} />;
    case APIS.records:
      return <APICard apis={records} />;
    case APIS.users:
      return <APICard apis={users} />;
    default:
      router.push("/");
  }
}
