function FormCheckBox({value,updateValue}) {


  return (
    <div className="form__item form-checbox">
      <h3 className="form__item-title form-checbox__title">Что уменьшаем?</h3>
      <div className="form-checbox__content">
        <div className="form-checbox__item">
          <input
            defaultChecked
            className="form-checbox__input"
            id="check1"
            type="radio"
            name="check"
            value="term"
            // defaultValue={value}
            onChange={(event) => updateValue(event.target.value)}
          />
          <label className="form-checbox__label" htmlFor="check1">
            Платеж
          </label>
        </div>
        <div className="form-checbox__item">
          <input
            className="form-checbox__input"
            id="check2"
            type="radio"
            name="check"
            value="payment"
            onChange={(event) => updateValue(event.target.value)}
          />
          <label className="form-checbox__label" htmlFor="check2">
            Срок
          </label>
        </div>
      </div>
    </div>
  );
}
export default FormCheckBox;
