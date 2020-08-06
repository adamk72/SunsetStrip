import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./contactheader.module.css"
import cx from 'classnames'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: theme.spacing('4'),
    },
}));

const ContactHeader = ({ siteTitle }) => {
    const classes = useStyles();
    return (
        <div className={cx(classes.root, headerStyles.container)}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
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
