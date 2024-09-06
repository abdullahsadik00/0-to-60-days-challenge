import React, { useEffect, useState } from 'react';

const App = () => {
  const [render,setRender] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },10000)
  },[])
  return (
    <div>
      App
      {render ?
      <MyComponent />
      :""
      }
    </div>
  );
};

// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log('component mounted');
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log('component unmounted');
//     };
//   }, []);
//   // Render UI
//   return(<div>
//     Component
//   </div>)
// }
class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("Components mounted")
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("Components unmounted")
  }

  render() {
    // Render UI
    return <div>
      My component class based
    </div>
  }
}

export default App;
