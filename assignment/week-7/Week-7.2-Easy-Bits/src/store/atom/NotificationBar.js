import { atom, selector } from "recoil";

export const networkAtom = atom({
    key:'networkAtom',
    default : 120
})
export const jobsAtom = atom({
    key:'jobsAtom',
    default : 0
})
export const notificationAtom = atom({
    key:'notificationAtom',
    default : 102
})
export const messagingAtom = atom({
    key:'messagingAtom',
    default : 0
})
export const meAtom = atom({
    key:'meAtom',
    default : 10
})
export const totalNotificationSelector = selector({
    key :"totalNotificationSelector",
    get:({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount+notificationAtomCount+messagingAtomCount
    }
})