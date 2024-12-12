import "./AddGame.css";

const AddGame: React.FC = () => {
  return (
    <form className="add-game-form">
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="name">
          Name
        </label>
        <input className="add-game-form__input" type="text" id="name" />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="price">
          Price
        </label>
        <input
          className="add-game-form__input"
          type="number"
          min={0}
          max={150}
          id="price"
        />
      </div>
      <div className="add-game-form__group--checkboxes">
        <span className="add-game-form__label">Genders (max:2)</span>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="Action">
            Action
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Action"
            type="checkbox"
          />
        </div>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="Shooter">
            Shooter
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Shooter"
            type="checkbox"
          />
        </div>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="RPG">
            RPG
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="RPG"
            type="checkbox"
          />
        </div>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="Adventure">
            Adventure
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Adventure"
            type="checkbox"
          />
        </div>
        <div className="add-game-form__group--checkbox">
          <label
            className="add-game-form__label--checkbox"
            htmlFor="Simulation"
          >
            Simulation
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Simulation"
            type="checkbox"
          />
        </div>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="Horror">
            Horror
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Horror"
            type="checkbox"
          />
        </div>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="Sports">
            Sports
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Sports"
            type="checkbox"
          />
        </div>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="Puzzle">
            Puzzle
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Puzzle"
            type="checkbox"
          />
        </div>
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="rate">
          Rate
        </label>
        <input
          className="add-game-form__input"
          type="number"
          min={0}
          max={5}
          id="rate"
        />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="description">
          Description
        </label>
        <textarea
          className="add-game-form__input add-game-form__input--text-area"
          id="description"
        />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="developer">
          Developer
        </label>
        <input className="add-game-form__input" type="text" id="developer" />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="date">
          Date
        </label>
        <input className="add-game-form__input" type="date" id="date" />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="imageUrl">
          Image URL
        </label>
        <input className="add-game-form__input" type="url" id="imageUrl" />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="imageAlt">
          Alternative text
        </label>
        <input className="add-game-form__input" type="text" id="imageAlt" />
      </div>
    </form>
  );
};

export default AddGame;
