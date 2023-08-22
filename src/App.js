import "./App.css";

import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
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
        flushSync(() => {
          setScrollDirection((prev) => {
            currentScrolldict = prev;
            console.log(prev);
            return prev;
          });
        });

        console.log(currentScrolldict);
        if (currentScrolldict === "up" || currentScrolldict === "down") {
          console.log("iff");
          setData((prev) => {
            console.log(currentScrolldict);
            if (currentScrolldict === "up") {
              let removeFirst = prev.slice(0, prev.length - 2);
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
              return [...dummyData, ...removeFirst];
            } else if (currentScrolldict === "down") {
              let removeFirst = prev.slice(1, prev.length);
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
              console.log(removeFirst);
              return [...removeFirst, ...dummyData];
            }
          });
        }
      }
    });

    // console.log(ref.current.lastChild);
    // if (scrollDirection === "up") {
    //   observer.observe(ref.current.firstChild);
    //   if (isIntersecting) {
    //     let removeFirst = data.slice(4, 9);
    //     let dummyData = [{ name: "123", age: "22" },
    //     { name: "123", age: "22" },
    //     { name: "123", age: "22" },]
    //     setData(
    //       dummyData.concat(removeFirst)
    //     );
    //   }
    // } else if (scrollDirection === "down") {
    //   observer.observe(ref.current.lastChild);
    //   if (isIntersecting) {
    //     let removeFirst = data.slice(0, 7);
    //     setData(
    //       removeFirst.concat(
    //         { name: "123", age: "22" },
    //         { name: "123", age: "22" },
    //         { name: "123", age: "22" },
    //         { name: "123", age: "22" }
    //       )
    //     );
    //   }
    // }
  }, []);
  useEffect(() => {
    console.log(ref.current.lastChild);
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
