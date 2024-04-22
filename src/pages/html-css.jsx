/* import { useState } from "react";
import Todo from "../components/Todo";

export default function HtmlCss() {
  return (
    <>
      <h1>HTML & CSS</h1>
      <section>
        <Todo />
      </section>
    </>
  );
} */

import { useState, useRef, useEffect } from "react";
import CheckboxWithComment from "../components/CheckboxWithComment";

export default function HtmlCss() {
  const [defaultSubjects, setDefaultSubjects] = useState([
    "Flexbox",
    "Grid",
    "Responsiv design",
    "BEM",
    "Animationer",
  ]);
  const [newSubject, setNewSubject] = useState("");
  const lastCheckboxRef = useRef(null);

  const handleInputChange = (event) => {
    setNewSubject(event.target.value);
  };

  const handleAddSubject = () => {
    if (newSubject.trim() !== "") {
      setDefaultSubjects((prevSubjects) => [
        ...prevSubjects,
        newSubject.trim(),
      ]);
      setNewSubject("");
    }
  };

  const handleRemoveSubject = (index) => {
    setDefaultSubjects((prevSubjects) =>
      prevSubjects.filter((_, i) => i !== index)
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddSubject();
    }
  };

  useEffect(() => {
    if (lastCheckboxRef.current) {
      lastCheckboxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [defaultSubjects]);

  return (
    <>
      <h1>HTML & CSS</h1>
      <section className="allSubjects">
        {defaultSubjects.map((subject, index) => (
          <div className="singleSubject" key={index}>
            <CheckboxWithComment label={subject} defaultChecked={false} />
            <div className="removeBtnWrapper">
              <button
                className="removeBtn"
                onClick={() => handleRemoveSubject(index)}
              >
                Ta bort
              </button>
            </div>
          </div>
        ))}
        <div ref={lastCheckboxRef}></div>
        <section className="addSubject">
          <input
            type="text"
            value={newSubject}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="..."
          />
          <button className="addBtn" onClick={handleAddSubject}>
            Lägg till
          </button>
        </section>
      </section>
    </>
  );
}
