import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RecoilRoot, useRecoilValue } from 'recoil';
import {
  jobsAtom,
  meAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from './store/atom/NotificationBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <NavBar />
      </RecoilRoot>
    </>
  );
}

export default App;

const NavBar = () => {
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const notification = useRecoilValue(notificationAtom);
  const messaging = useRecoilValue(messagingAtom);
  const me = useRecoilValue(totalNotificationSelector);
  return (
    <div>
      <button>My Network ({network})</button>
      <button>Jobs ({jobs})</button>
      <button>Notification ({notification >= 100 ?"99+":notification})</button>
      <button>Messaging ({messaging}) </button>
      <button>Me ({me})</button>
    </div>
  );
};
