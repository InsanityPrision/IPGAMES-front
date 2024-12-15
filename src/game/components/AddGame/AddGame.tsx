import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import "./AddGame.css";
import { Game, GenderType } from "../../types";

const AddGame: React.FC = () => {
  const [
    {
      name,
      price,
      rate,
      description,
      developer,
      date,
      genders,
      imageUrl,
      imageAlt,
    },
    setNewGameData,
  ] = useState<Omit<Game, "_id">>({
    name: "",
    price: 0,
    isFree: false,
    rate: 0,
    description: "",
    developer: "",
    date: "",
    genders: [],
    imageUrl: "",
    imageAlt: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const updateNewGameData = (
    event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>,
  ) => {
    const newGenders: GenderType[] = [];

    if (
      !genders.includes(event.target.id as GenderType) &&
      event.target.checked
    ) {
      newGenders.push(event.target.id as GenderType);
    }

    let newIsFree = false;

    if (price === 0) {
      newIsFree = true;
    }

    setNewGameData((gameData) => ({
      ...gameData,
      [event.target.id]: event.target.value,
      genders: [...genders, ...newGenders],
      isFree: newIsFree,
    }));
  };

  useEffect(() => {
    const isValidForm =
      name.length > 0 &&
      description.length > 0 &&
      developer.length > 0 &&
      imageUrl.length > 0 &&
      imageAlt.length > 0 &&
      date.length > 0;

    setIsDisabled(!isValidForm);
  }, [
    name.length,
    description.length,
    developer.length,
    imageUrl.length,
    imageAlt.length,
    date.length,
  ]);

  return (
    <form className="add-game-form">
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="name">
          Name
        </label>
        <input
          className="add-game-form__input"
          type="text"
          id="name"
          value={name}
          onChange={updateNewGameData}
          required
        />
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
          value={price}
          onChange={updateNewGameData}
          required
        />
      </div>
      <div className="add-game-form__group--checkboxes">
        <span className="add-game-form__label">Genders (max: 2)</span>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="Action">
            Action
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Action"
            type="checkbox"
            onChange={updateNewGameData}
          />
        </div>
        <div className="add-game-form__group--checkbox">
          <label className="add-game-form__label--checkbox" htmlFor="Shooter">
            Shooter
          </label>
          <input
            className="add-game-form__input add-game-form__input--checkbox"
            id="Shooter"
            onChange={updateNewGameData}
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
            onChange={updateNewGameData}
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
            onChange={updateNewGameData}
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
            onChange={updateNewGameData}
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
            onChange={updateNewGameData}
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
            onChange={updateNewGameData}
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
            onChange={updateNewGameData}
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
          value={rate}
          onChange={updateNewGameData}
          required
        />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="description">
          Description
        </label>
        <textarea
          className="add-game-form__input add-game-form__input--text-area"
          id="description"
          value={description}
          onChange={updateNewGameData}
          required
        />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="developer">
          Developer
        </label>
        <input
          className="add-game-form__input"
          type="text"
          id="developer"
          value={developer}
          onChange={updateNewGameData}
          required
        />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="date">
          Date
        </label>
        <input
          className="add-game-form__input"
          type="date"
          min="1952-01-01"
          max="2040-01-01"
          id="date"
          value={date}
          onChange={updateNewGameData}
          required
        />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="imageUrl">
          Image URL
        </label>
        <input
          className="add-game-form__input"
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={updateNewGameData}
          required
        />
      </div>
      <div className="add-game-form__group">
        <label className="add-game-form__label" htmlFor="imageAlt">
          Alternative text
        </label>
        <input
          className="add-game-form__input"
          type="text"
          id="imageAlt"
          value={imageAlt}
          onChange={updateNewGameData}
          required
        />
      </div>
      <Button
        className="button button--form"
        children="Create game"
        disabled={isDisabled}
      />
    </form>
  );
};

export default AddGame;
