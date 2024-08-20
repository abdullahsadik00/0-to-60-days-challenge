import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import {
  // jobsAtom,
  // meAtom,
  // messagingAtom,
  // networkAtom,
  // notificationAtom,
  notifications,
  // totalNotificationSelector,
  totalNotificationSelector,
} from './store/atom/NotificationBar';
import axios from 'axios';

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
  const [networkCount,setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  // const jobs = useRecoilValue(jobsAtom);
  // const notification = useRecoilValue(notificationAtom);
  // const messaging = useRecoilValue(messagingAtom);
  // const me = useRecoilValue(totalNotificationSelector);

  useEffect(()=>{
    axios.get('https://sum-server.100xdevs.com/notifications')
   .then(res=>{setNetworkCount(res.data)}) 
  },[])
  return (
    <div>
      <button>My Network ({networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Notification ({networkCount.notifications >= 100 ?"99+":networkCount.notifications})</button>
      <button>Messaging ({networkCount.messaging}) </button>
      <button>Me ({totalNotificationCount})</button>
    </div>
  );
};
