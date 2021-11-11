function FormCalcItem({ price, indx, value, update }) {
  const LabelId = Math.random() * Math.random();

  function declOfNum(number, titles = ["ой", "ий", "ый"]) {
    let cases = [2, 2, 0, 1, 1, 2];
    return titles[
      number % 100 >= 4 && number % 100 < 20
        ? number >= 6 && number < 10
          ? 0
          : 2
        : cases[number % 10 < 5 ? number % 10 : 4]
    ];
  }
  return (
    <div className="form-calc__item">
      <input
        value={value}
        className="form-calc__checkbox"
        id={LabelId}
        type="checkbox"
        onInput={() => update()}
      />
      <label className="form-calc__label" htmlFor={LabelId}>
        {Math.ceil(price).toLocaleString()} рублей в {indx + 1}-
        {declOfNum(indx + 1)} год
      </label>
    </div>
  );
}

export default FormCalcItem;
