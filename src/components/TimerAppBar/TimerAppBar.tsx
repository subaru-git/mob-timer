/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CopyToClipboard from 'react-copy-to-clipboard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    billingBase: {
      height: '64px',
    },
    billing: {
      transform: 'scale(1.0)',
      transformOrigin: '0 0',
      paddingTop: '2px',
      height: '80px',
      marginTop: '-20px',
    },
  }),
);

export interface TimerAppBarProps {
  handleDrawerOpen: () => void;
  menu: boolean;
}

const TimerAppBar: FC<TimerAppBarProps> = ({ handleDrawerOpen = () => {}, menu = true }) => {
  const classes = useStyles();
  const [tooltip, setTooltip] = useState('');

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {menu ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div />
          )}
          <Link className={classes.title} href="/" color="inherit" variant="h5" underline="none">
            Mob Timer
          </Link>
          {menu ? (
            <>
              <Tooltip
                title={tooltip}
                onClose={() => {
                  setTooltip('');
                }}
              >
                <CopyToClipboard text={window.location.href}>
                  <IconButton
                    onClick={() => {
                      setTooltip('URL copied!!');
                    }}
                  >
                    <PersonAddIcon color="inherit" />
                  </IconButton>
                </CopyToClipboard>
              </Tooltip>
            </>
          ) : (
            <div />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { TimerAppBar };
