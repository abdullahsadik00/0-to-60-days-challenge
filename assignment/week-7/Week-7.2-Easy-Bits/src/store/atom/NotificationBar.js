import { atom, selector } from 'recoil';
import axios from 'axios';

// export const networkAtom = atom({
//     key:'networkAtom',
//     default : 120
// })
// export const jobsAtom = atom({
//     key:'jobsAtom',
//     default : 0
// })
// export const notificationAtom = atom({
//     key:'notificationAtom',
//     default : 102
// })
// export const messagingAtom = atom({
//     key:'messagingAtom',
//     default : 0
// })
// export const meAtom = atom({
//     key:'meAtom',
//     default : 10
// })
// export const totalNotificationSelector = selector({
//     key :"totalNotificationSelector",
//     get:({get})=>{
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const notificationAtomCount = get(notificationAtom);
//         const messagingAtomCount = get(messagingAtom);
//         return networkAtomCount + jobsAtomCount+notificationAtomCount+messagingAtomCount
//     }
// })

export const notifications = atom({
  key: 'networkAtom',
  //   default: {
  //     network: 0,
  //     jobs: 0,
  //     messaging: 0,
  //     notifications: 0,
  //   },
  default: selector({
    key: 'networkAtomSelector',
    get: async () => {
    //   await new Promise((r) => setTimeout(r, 5000));
      const res = await axios.get(
        'https://sum-server.100xdevs.com/notifications'
      );
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: 'totalNotificationSelector',
  get: ({ get }) => {
    const allNotification = get(notifications);
    return (
      allNotification.network +
      allNotification.jobs +
      allNotification.messaging +
      allNotification.notifications
    );
  },
});
