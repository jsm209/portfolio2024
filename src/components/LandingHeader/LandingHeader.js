import React from "react";
import styles from './LandingHeader.module.css';
import PropTypes from 'prop-types';
import GLOBALSTYLES from "../../styles/globalStyles";

const LandingHeader = ({heading, subheading}) => {
    const styleVariables = {
        '--primary-color': GLOBALSTYLES.colors.primary,
        '--heading-font-size': GLOBALSTYLES.typography.fontSizeExtraLarge,
        '--heading-bold-size': GLOBALSTYLES.typography.fontWeightBold,
        '--subheading-font-size': GLOBALSTYLES.typography.fontSizeBase,
        '--font-family': GLOBALSTYLES.typography.fontFamily
    }
    
    return (
        <div>
            <h1 className={styles.heading} style={styleVariables}>{heading}</h1>
            {subheading && <h2 className={styles.subheading} style={styleVariables}>{subheading}</h2>}
           
        </div>
    )
}

LandingHeader.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string
}

export default LandingHeader;