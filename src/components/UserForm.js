import { useRef } from "react";

const UserForm = (props) => {
  const inputRef = useRef(null);

  const handleSubmission = (e) => {
    e.preventDefault();

    // Send username to parent - which will in turn start the game
    props.handleFormSubmission(inputRef.current.value);
  };

  return (
    <form className="UserForm">
      <div className="form-gameRules">
        <p className="form-title">Game Information</p>
        <ul>
          <li>
            -Find 3 Pokemons: Minun, Pichu, and Plusle (see icons above for
            reference)
          </li>
          <li>-You will be timed as soon as you select start game.</li>
          <li>
            -Check out the records page to see how you did compared to others!
          </li>
        </ul>
      </div>
      <br />
      {/* BEGIN FORM INPUT */}
      <label htmlFor="name">Enter Your Nickname:</label> <br />
      <input ref={inputRef} type="text" id="name" /> <br />
      <input
        id="beginGame-btn"
        type="submit"
        value="Begin Game"
        onClick={(e) => handleSubmission(e)}
      />
    </form>
  );
};

export default UserForm;