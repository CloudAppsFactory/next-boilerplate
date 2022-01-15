// #region Global Imports
import * as React from "react";
import { LineArt } from "./LineArt";
import { InstituteDropDown } from "./InstituteDropDown";
import { SlantDiv } from "./slantDiv";
import styles from './InstituteSelection.module.css';

export const InstituteSelection: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <div className={styles.maindiv}>
                <InstituteDropDown />
                <LineArt />
            </div>
            <SlantDiv />
        </>

    );
};


