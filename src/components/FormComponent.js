/** @format */

import React, { useReducer } from "react";

import {
  FormContainer,
  InputSection,
  SubmitButton,
  WarningMessage,
} from "../StyledComponents";

import { formReducer, actions } from "../reducers/formReducer";

const FormComponent = () => {
  const [state, dispatch] = useReducer(formReducer, {
    purchasePrice: "",
    downPayment: "",
    amortization: "",
    interestRate: "",
    monthlyPayments: 0.0,
    ErrorMessage: "",
  });
  const {
    purchasePrice,
    downPayment,
    amortization,
    interestRate,
    monthlyPayments,
    errorMessage,
  } = state;

  const submitCalculation = async (e) => {
    e.preventDefault();

    // validateInputs
    const validatedPrice = await validateInput(
      purchasePrice,
      actions.setPurchasePrice
    );
    const validatedPayment = await validateInput(
      downPayment,
      actions.setDownPayment
    );
    const validatedAmortization = await validateInput(
      amortization,
      actions.setAmortization
    );
    const validatedInterestRate = await validateInput(
      interestRate,
      actions.setInterestRate
    );

    if (
      validatedPrice &&
      validatedPayment &&
      validatedAmortization &&
      validatedInterestRate
    )
      calculateValues();
  };

  const calculateValues = () => {
    // M = P[r(1+r)^n/((1+r)^n)-1)]

    let principal = purchasePrice - downPayment;
    let monthlyInterest = interestRate / 100 / 12;
    let numberOfPayments = amortization * 12;
    let monthlyPrice =
      (principal *
        [monthlyInterest * (1 + monthlyInterest) ** numberOfPayments]) /
      [(1 + monthlyInterest) ** numberOfPayments - 1];
    // monthlyPrice = ` $${Math.ceil(monthlyPrice)}`;

    dispatch({
      type: actions.setMonthlyPayments,
      value: {
        ...state,
        monthlyPayments: monthlyPrice,
      },
    });
  };

  const validateInput = (field, actionType) => {
    let int = parseFloat(field);

    if (field === "" || field === 0) {
      if (isNaN(int)) {
        dispatch({
          type: actionType,
          value: {
            ...state,
            errorMessage: "Please enter a valid value",
          },
        });
        return false;
      }
    } else {
      dispatch({
        type: actionType,
        value: int,
      });
      return true;
    }
  };

  return (
    <FormContainer>
      <h1>Mortgage Calculator</h1>
      <form>
        <InputSection>
          <label>Purchase Price</label>
          <WarningMessage>
            {purchasePrice && typeof purchasePrice === "string"
              ? ""
              : errorMessage}
          </WarningMessage>
          <input
            onChange={(e) =>
              dispatch({
                type: actions.setPurchasePrice,
                value: {
                  ...state,
                  purchasePrice: e.target.value,
                },
              })
            }
            type="text"
          />
        </InputSection>
        <InputSection>
          <label>Down Payment</label>
          <WarningMessage>{downPayment ? "" : errorMessage}</WarningMessage>

          <input
            onChange={(e) =>
              dispatch({
                type: actions.setDownPayment,
                value: {
                  ...state,
                  downPayment: e.target.value,
                },
              })
            }
            type="text"
          />
        </InputSection>
        <InputSection>
          <label>Amortization</label>
          <WarningMessage>{amortization ? "" : errorMessage}</WarningMessage>

          <input
            onChange={(e) =>
              dispatch({
                type: actions.setAmortization,
                value: {
                  ...state,
                  amortization: e.target.value,
                },
              })
            }
            type="text"
          />
        </InputSection>
        <InputSection>
          <label>interest rate</label>
          <WarningMessage>{interestRate ? "" : errorMessage}</WarningMessage>

          <input
            onChange={(e) =>
              dispatch({
                type: actions.setInterestRate,
                value: {
                  ...state,
                  interestRate: e.target.value,
                },
              })
            }
            type="text"
          />
        </InputSection>
        <SubmitButton onClick={(e) => submitCalculation(e)}>
          Calculate
        </SubmitButton>
      </form>
      <h3>
        Estimated Monthly Payments:
        {monthlyPayments
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Math.ceil(monthlyPayments))
          : ""}{" "}
      </h3>
    </FormContainer>
  );
};

export default FormComponent;
