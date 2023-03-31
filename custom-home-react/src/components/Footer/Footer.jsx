import React from 'react'
import { GoogleMap } from '../../components'

import styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.businessInfo}>
                <div className={styles.address}>
                    <h3>Get in Touch</h3>
                    <p>1600 S. Milford Rd.
                        <br />
                        Highland, MI 48357
                    </p>

                    <p><span>Main:</span> (248) 889-7000
                        <br />
                        <span>Fax:</span> (248) 889-4466
                    </p>
                </div>
                <div className={styles.googleMap}>
                    <GoogleMap />
                </div>
            </div>

            <div>
                © 2013, Bailey Custom Homes, Inc.
            </div>
        </div>
    )
}

export default Footer