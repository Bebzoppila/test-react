import { useState } from "react";

function FormInput({ regular, updateState }) {
  const [errors, set_errors] = useState(false);
  const [inputState, set_inputState] = useState("");

  const updateInputState = (event) => {
    set_inputState(event.target.value);
  };

  const ValidateState = () => { 
    regular.test(inputState) ? successfulValidate() : failValidate();
  };

  const successfulValidate = () => {
    const pureInputValue = Number(RemoveRussian())
    const normalNumber = pureInputValue.toLocaleString()
    set_inputState(normalNumber + " ₽");
    set_errors(false);
    updateState(pureInputValue)
  };

  const failValidate = () => {
    set_inputState(RemoveRussian());
    set_errors(true);
  };

  const RemoveRussian = () => {
    return inputState.replace(/[₽\s]/gi, "");
  };

  return (
    <div className="form__item">
      <label className="form__item-title" htmlFor="zarplata">
        Ваша зарплата в месяц
      </label>
      <input
        onBlur={ValidateState}
        onChange={updateInputState}
        value={inputState}
        placeholder="Введите данные"
        className={
          "form__item-input " + (errors ? " form__item-input--error" : " ")
        }
        id="zarplata"
        type="text"
      />
      <span className="form__item-error">
        {errors ? "Ошибка в ведённых символах" : " "}
      </span>
    </div>
  );
}

export default FormInput;
