import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([])
  const url = 'https://course-api.com/react-tabs-project';

  const fetchData = async (url) => {
      try {
        const response = await fetch(url);
         const data = await response.json();
         setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(()=>{
    fetchData(url);
  }, [])


  return (
    <div >
      Hello World!
    </div>
  );
}

export default App;
