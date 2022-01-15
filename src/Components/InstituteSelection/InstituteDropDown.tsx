import * as React from "react";
import styles from './InstituteDropDown.module.css';

export const InstituteDropDown: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
            Fees bharna online hua 
            <br/>
            ab aasan !
            </div>

            <br/>
            <div className={styles.dropDown}>
                Select School*
            </div>
            <div className={styles.dropDown}>
            <div >
             {/* <select className={styles.inputText}  id="myInput"  name="myCountry" placeholder="Select Your School" /> */}

             <select className={styles.inputText}  id="myInput"  name="myCountry">
                <option selected>Select Your School</option>
                <option value="0">Smt Sulochanadevi Singhania School</option>
                <option value="1">Dhirubhai Ambani International School</option>
                <option value="2">The Cathedral & John Connon School</option>
                <option value="3">Campion School</option>
            </select>
  </div>

  <div>
  <button className={styles.btnn}>Submit</button>
  </div>
            </div>
        </div>
    );
};
