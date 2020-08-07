import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from './NavBar/index'
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px black dotted',
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
    <header className={classes.root}>
      <div className={cx(classes.flexArea, "container")}>
        <h1>
          <Link to="/" className={classes.title}>
            {siteTitle}
          </Link>
        </h1 >
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
