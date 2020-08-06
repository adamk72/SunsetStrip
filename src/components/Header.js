import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.module.css"
import NavBar from './NavBar'
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames'


const useStyles = makeStyles((theme) => ({
  root: {

  },
  title: {
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  flexArea: {
    display: 'flex',
    alignItems: 'center',
  }
}
));

const Header = ({ siteTitle }) => {
  const classes = useStyles();
  return (
    <header className={cx(classes.root, "container")}>
      <div className={classes.flexArea}>
        <h1>
          <Link to="/" className={classes.title}>
            {siteTitle}
          </Link>
        </h1>
        <NavBar />
      </div>
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
