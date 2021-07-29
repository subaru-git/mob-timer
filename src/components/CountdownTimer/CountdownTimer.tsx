import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Wave } from 'react-animated-text';
import Countdown, { zeroPad } from 'react-countdown';

const useStyles = makeStyles(() =>
  createStyles({
    countdown: {
      margin: '16px',
    },
    main: {
      fontSize: 'calc(40px + 2vmin)',
    },
  }),
);

export interface CountdownTimerProps {
  end: Date;
  onFinish: () => void;
}

const CountdownTimer: FC<CountdownTimerProps> = ({
  end,
  onFinish = () => {
    /* nop */
  },
}) => {
  const classes = useStyles();

  return (
    <div className={classes.countdown}>
      <Countdown
        date={end}
        renderer={({ minutes, seconds }) => {
          const text = `${zeroPad(minutes)} : ${zeroPad(seconds)}`;

          return (
            <div className={classes.main}>
              <Wave text={text} speed={text.length} />
            </div>
          );
        }}
        onComplete={() => {
          onFinish();
          document.title = 'Mob Timer';
        }}
        onTick={({ minutes, seconds }) => {
          const text = `${zeroPad(minutes)} : ${zeroPad(seconds)}`;
          document.title = text;
        }}
      />
    </div>
  );
};

export { CountdownTimer };
