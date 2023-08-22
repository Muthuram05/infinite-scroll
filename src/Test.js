import "./App.css";

import { useState, useRef, useEffect } from "react";
import {flushSync} from 'react-dom'
function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const [data, setData] = useState([
    {
      name: "ram",
      age: "20",
    },
    {
      name: "ram",
      age: "20",
    },
    {
      name: "ram",
      age: "20",
    },
    {
      name: "ram",
      age: "20",
    },
    {
      name: "ram",
      age: "20",
    },
    {
      name: "ram",
      age: "20",
    },
    {
      name: "ram",
      age: "20",
    },
    {
      name: "ram",
      age: "20",
    },
    {
      name: "ram",
      age: "20",
    },
  ]);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const intersectionObserver = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollDirection(currentPosition);

      if (currentPosition > prevScrollPosition) {
        setScrollDirection("down");
      } else if (currentPosition < prevScrollPosition) {
        setScrollDirection("up");
      } else {
        setScrollDirection("none");
      }

      setPrevScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);
  useEffect(() => {
    intersectionObserver.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
      let currentScrolldict;
      flushSync(()=>{
        setScrollDirection((prev)=>{
          currentScrolldict = prev;
          return prev;
        })
      })
      if(currentScrolldict === "up" || currentScrolldict ==='down'){
        setData((prev) => {
          if(currentScrolldict === "up"){
            console.log("if-up")
            let removeFirst = prev.slice(0,prev.length - 2);
            let dummyData = [
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
            ];
            return [...dummyData,...removeFirst];      
          }
          else if(currentScrolldict === "down"){
            let removeFirst = prev.slice(0,prev.length);
            let dummyData = [
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
              { name: "123", age: "22" },
            ];
            return [...removeFirst,...dummyData];
          }
        });
      }
    }
      
    });
    
  }, []);
  useEffect(() => {
    console.log(ref.current.lastChild)
    let lastchild = ref.current.lastChild;
    intersectionObserver.current.observe(lastchild);
    return () => intersectionObserver.current.unobserve(lastchild);
  }, [data]);

  return (
    <div className="App" ref={ref}>
      {data.map((e) => (
        <div style={{ height: "20vh" }}>
          {e.name} {scrollDirection}
        </div>
      ))}
    </div>
  );
}

export default App;
