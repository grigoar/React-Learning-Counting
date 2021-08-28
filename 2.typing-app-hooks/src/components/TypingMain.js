import React, { useState, useEffect, useRef } from "react";

export const TypingMain = () => {
  const [typedText, setTypedText] = useState("");
  const [dynamicText, setDynamicText] = useState([]);
  const [matchingText, setMatchingText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const textLength = useRef(0);
  const matchText = "Believe you can and you're halfway there.";

  const splitMatchText = (matchText) => {
    const matchTextSplitted = [...matchText];
    // console.log(matchTextSplitted[1]);
    // console.log(matchText);
    // for (let character of matchTextSplitted) {
    //   console.log(character);
    // }
    return matchTextSplitted;
  };
  useEffect(() => {
    const matchTextSplitted = [...matchText];
    let dynamicTextFirstRender = [];
    for (let [index, character] of matchTextSplitted.entries()) {
      dynamicTextFirstRender.push({
        id: index,
        character: character,
        check: "normal",
      });
    }
    setDynamicText(dynamicTextFirstRender);
    console.log(dynamicTextFirstRender);
  }, []);

  const displayTypedText = (e) => {
    // console.log("this is not working");
    // console.log(dynamicText);
    setTypedText(e.target.value);

    //Using ref for maintaining the previous length
    // console.log(textLength.current);
    // e.target.value.length > textLength.current
    //   ? setCurrentIndex(currentIndex + 1)
    //   : setCurrentIndex(currentIndex - 1);
    // textLength.current = e.target.value.length;

    setCurrentIndex(e.target.value.length);
    console.log(`Something and the current index id: ${currentIndex}`);
    setMatchingText(
      dynamicText.map((letter, index) => {
        if (
          e.target.value.slice(-1) === letter.character &&
          index === currentIndex
        ) {
          letter.check = "valid";
        }
        //   console.log(letter);
        // <div style={{ color: letter.check === "valid" ? "green" : "red" }}>
        console.log(currentIndex + " , " + index);
        return (
          <div
            key={index}
            style={{
              color: letter.check === "valid" ? "green" : "red",
            }}
          >
            {letter.character}
          </div>
        );
      })
    );
  };

  const handleIndex = (e) => {
    // e.key === "Enter"
    //   ? console.log("enter pressed")
    //   : console.log("something is not working");
    // console.log(`The key pressed : ${e.keyCode}`);
    // console.log(`The keyCode for the key pressed is: ${e.keyCode}`);
    // e.keyCode === 8
    //   ? setCurrentIndex(currentIndex - 1)
    //   : console.log("yea, not working");
    // if (e.keyCode === 16) return;
    // e.keyCode !== 8
    //   ? setCurrentIndex(currentIndex + 1)
    //   : setCurrentIndex(currentIndex - 1);
    // setCurrentIndex(currentIndex + 1);
  };

  return (
    <main>
      <div>{matchText} </div>

      <input
        type="text"
        id="typeText"
        value={typedText}
        onChange={(e) => displayTypedText(e)}
        onKeyDown={(e) => handleIndex(e)}
      ></input>
      <div>Text typed: {typedText}</div>
      <div>Text Matched: {matchingText}</div>
    </main>
  );
};
