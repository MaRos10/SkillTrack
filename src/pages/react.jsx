import { useState, useRef, useEffect } from "react";
import CheckboxWithComment from "../components/CheckboxWithComment";

export default function React() {
  const [defaultSubjects, setDefaultSubjects] = useState([
    "Komponenter",
    "Props",
    "Events - onClick & onChange",
    "Map",
    "useState",
    "useEffect",
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
      <h1>React</h1>
      <section>
        {defaultSubjects.map((subject, index) => (
          <div key={index}>
            <CheckboxWithComment label={subject} defaultChecked={false} />
            <button onClick={() => handleRemoveSubject(index)}>Ta bort</button>
          </div>
        ))}
        <div ref={lastCheckboxRef}></div>
        <section>
          <input
            type="text"
            value={newSubject}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="..."
          />
          <button onClick={handleAddSubject}>Lägg till</button>
        </section>
      </section>
    </>
  );
}
