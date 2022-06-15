import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";

const App = () => {
  const str = "Hello React!";
  const logo = "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png";
  let init_cars = [
    {
      model: "Model S",
      image:
        "https://i.ytimg.com/vi/09q96XOtFYE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCT-JiNi83-yVei-wGuD-loysJq0w",
      id: 1,
    },
    {
      model: "Model Y",
      image:
        "https://www.meme-arsenal.com/memes/58f7020c7da458418ca2a0cc90f88fc9.jpg",
      id: 2,
    },
    {
      model: "Model X",
      image:
        "https://360tv.ru/media/uploads/article_images/2019/10/50059_19633152-7566413-image-a-56_1570908569851.jpg",
      id: 3,
    },
    {
      model: "Model 3",
      image:
        "https://memepedia.ru/wp-content/uploads/2019/01/screenshot_45.png",
      id: 4,
    },
  ];

  const [cars, setCars] = useState(init_cars);

  // !  переменные
  // let counter = 0;
  // function decrement() {
  //   counter--;
  //   console.log(counter);
  // }
  // function increment() {
  //   counter++;
  //   console.log(counter);
  // }

  // ! useState;

  // const myHook = useState("hello useState!");
  // console.log(myHook);
  // const [state, setState] = useState(0);
  // console.log(state);
  return (
    <div>
      {/* <button onClick={() => decrement()}>-</button>
      <span>{counter}</span>
      <button onClick={() => increment()}>+</button> */}

      {/* <button onClick={() => setState(state - 1)}>-</button>
      <span>{state}</span>
      <button onClick={() => setState(state + 1)}>+</button> */}

      <Header cars={cars} logo={logo} name={"Baiysh"} age={16} />
      <List cars={cars} />
      <Footer />
    </div>
  );
};

export default App;
