import { useState, useRef, useEffect } from "react";

export default function CheckboxWithComment({ label, defaultChecked }) {
  const [isChecked, setIsChecked] = useState(defaultChecked || false);
  const [comment, setComment] = useState("");
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [isChecked]);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <section ref={checkboxRef}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Lägg till kommentar..."
      />
    </section>
  );
}
