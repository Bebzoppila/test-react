import FormInput from "./FormInput";
import FormCalc from "./FormCalc";
import FormCheckBox from "./FormCheckBox";
import { useState, useEffect } from "react";
import {SendToBack} from "./../../api/SendToBack"
function Form({ classForm }) {
  const [formData, set_formData] = useState({
    salary: 0,
    earlyPayments: [],
    reducing: "term",
  });

  const updateSalary = (value) => {
    set_formData({ ...formData, salary: Number(value) });
  };

  const fillPlayment = () => {
    let taxYear = formData.salary * 12 * 0.13;
    let fullTax = 260000;
    let earlyPaymentsArr = [];
    while (fullTax > taxYear) {
      earlyPaymentsArr.push({
        id: Math.random(),
        value: false,
        money: taxYear,
      });
      fullTax -= taxYear;
    }
    earlyPaymentsArr.push({ id: Math.random(), value: false, money: fullTax });
    set_formData({ ...formData, earlyPayments: earlyPaymentsArr });
  };

  useEffect(() => {
    if (formData.salary > 0) {
      fillPlayment();
    }
  }, [formData.salary]);

  const toggleEarlyPayments = (id) => {
    set_formData({
      ...formData,
      earlyPayments: formData.earlyPayments.map((element) =>
        element.id === id ? { ...element, value: !element.value } : element
      ),
    });
  };


  const updateReducing = (newVal) =>
    set_formData({ ...formData, reducing: newVal });

  return (
    <form onSubmit={() => SendToBack(formData)} className={classForm ? `form ${classForm}` : "form"}>
      <FormInput
        updateState={updateSalary}
        defaultState={formData.salary}
        regular={/^[0-9 ₽]/}
      />
      <FormCalc
        updatePlayements={toggleEarlyPayments}
        payments={formData.earlyPayments}
      />
      <FormCheckBox updateValue={updateReducing} value={formData.reducing} />
      <button disabled={!(formData.salary > 0)} className="form__btn btn btn-red">Добавить</button>
    </form>
  );
}

export default Form;
