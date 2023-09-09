import { TextNotification } from "./Notification.styled";
export const Notification = props => (
    <>
      <TextNotification>{props.message}</TextNotification>
    </>
  );