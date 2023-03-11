// Example from https://beta.reactjs.org/learn

import { useRouter } from "next/router";
import { useState } from "react";
import { APIS, PARAMETERS } from "../../../types/enums";
import {
  APIParameterProps,
  APIProps,
  APISchemaProps,
} from "../../../types/interfaces";
import styles from "./card.module.css";
const appointments = require("../../../data/api/appointments.json");
const records = require("../../../data/api/records.json");
const users = require("../../../data/api/users.json");

function APICard({ apis }: APIProps) {
  const [activeButton, setActiveButton] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div>
      {apis.map((apis) => (
        <div className={styles.card}>
          <div>
            <div key={apis.name}>
              <h1>{apis.name}</h1>
            </div>
          </div>
          <div className={styles.cardbody}>
            <p>{apis.description}</p>
            {apis.params && (
              <Parameters params={apis.params} name={PARAMETERS.PARAMETERS} />
            )}
              {apis.body && (
              <Parameters params={apis.body} name={PARAMETERS.BODY} />
            )}
              {apis.headers && (
              <Parameters params={apis.headers} name={PARAMETERS.HEADER} />
            )}
            <h1>RESPONSES</h1>
            <hr />
            <div>
              <div>
                <button
                  style={{ marginTop: "30px" }}
                  className={styles.btn1}
                  onClick={toggleVisibility}
                >
                  200 block
                </button>
                {isVisible && <p>Appointment is added sucessfully</p>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Parameters = ({ params, name }: APIParameterProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <hr />

      <div>
        {params.map((params) => (
          <div  className={styles.space1}>
          <div>
                <h1>{params.name}</h1>
                <br />
                <br />
                <br />
              
              </div>
              <div>
      
                <h1>{typeof params.type}</h1>
                <br />
                <h1> {params.example}</h1>
               
                <br />
                <h1>{params.description}</h1>
                <br /> <br />
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
