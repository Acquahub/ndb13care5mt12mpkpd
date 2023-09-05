import React from 'react';
import Link from 'next/link';
import styles from './screen2.module.css';
import { Metadata } from "next";

import * as fonts from '../../agua/assets/fonts';


export const metadata: Metadata = {
                
}

function Screen2() {
    
    

    return(
        <div className={styles["Screen2"]}>
            
<div id="cmbanner-1-139ff75a43034c33ba4299b72184a9d6" className={styles["cmbanner-1-139ff75a43034c33ba4299b72184a9d6"]}  >

<div className={""}>
    <div id="text-1-e8dde923447d4813bd9ef6987b090f14" className={styles["text-1-e8dde923447d4813bd9ef6987b090f14"]}  >
        We are changing our pricing.
    </div>
</div>

<div className={""}>
    <div id="text-2-0372d9de17884fd1a7e7f81026b79a2c" className={styles["text-2-0372d9de17884fd1a7e7f81026b79a2c"]}  >
        Read more
    </div>
</div>
</div>
        </div>
    );
}

export default Screen2;
            