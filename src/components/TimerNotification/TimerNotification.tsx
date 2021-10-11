import React, { FC } from 'react';
import Notification from 'react-web-notification';

export interface TimerNotificationProps {
  show: boolean;
  onClose: () => void;
}

const TimerNotification: FC<TimerNotificationProps> = ({ show, onClose }) => {
  const playSound = () => {
    const audio = new Audio('./sound.mp3');
    audio.play();
  };

  return (
    <div>
      {!show ? (
        <div />
      ) : (
        <>
          <Notification
            ignore={false}
            title="The time is up! change driver or take a break!"
            onShow={() => {
              playSound();
            }}
            onClose={() => {
              onClose();
            }}
          />
        </>
      )}
    </div>
  );
};

export { TimerNotification };
