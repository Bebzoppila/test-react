import FormCalcItem from "./FormCalcItem";
function FormCalc({ payments, updatePlayements }) {

  const RenderCalcContent = () =>
    payments.map((element, indx) => (
      <FormCalcItem
        value={element.value}
        update={() => updatePlayements(element.id)}
        indx={indx}
        price={element.money}
        key={indx}
      />
    ));

  return (
    <div className="form-calc form__item">
      <button type="button" className="form-calc__btn">
        Рассчитать
      </button>
      <div
        className={
          "form-calc__content " +
          (payments.length > 0 ? "form-calc__content--active" : "")
        }
      >
        <h3 className="form-calc__title">
          Итого можете внести в качестве досрочных:
        </h3>
        {payments.length > 0 ? RenderCalcContent() : ""}
      </div>
    </div>
  );
}
export default FormCalc;
