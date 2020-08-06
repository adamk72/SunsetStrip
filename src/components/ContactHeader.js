import PropTypes from "prop-types"
import React from "react"
import cx from 'classnames'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Instagram from '@material-ui/icons/Instagram';
import Phone from '@material-ui/icons/Phone';
import Facebook from '@material-ui/icons/Facebook';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: theme.spacing('4'),
    },
    navIcon: {
        marginRight: '5px'
    }
}));

const ContactHeader = ({ siteTitle }) => {
    const classes = useStyles();
    return (
        <div className={cx(classes.root, "container")}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">


                <Button><Instagram className={classes.navIcon} />Instagram</Button>
                <Button><Facebook className={classes.navIcon} />Facebook</Button>
                <Button><Phone className={classes.navIcon} />Phone</Button>
            </ButtonGroup>
        </div>
    )
}

ContactHeader.propTypes = {
    siteTitle: PropTypes.string,
}

ContactHeader.defaultProps = {
    siteTitle: ``,
}

export default ContactHeader
