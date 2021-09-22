/** @format */

export const actions = {
  setPurchasePrice: "setPurchasePrice",
  setDownPayment: "setDownPayment",
  setAmortization: "setAmortization",
  setInterestRate: "setInterestRate",
  setMonthlyPayments: "setMonthlyPayments",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case actions.setPurchasePrice:
      return {
        ...state,
        purchasePrice: action.value.purchasePrice,
        errorMessage: action.value.errorMessage,
      };

    case actions.setDownPayment:
      return {
        ...state,
        downPayment: action.value.downPayment,
        errorMessage: action.value.errorMessage,
      };

    case actions.setAmortization:
      return {
        ...state,
        amortization: action.value.amortization,
        errorMessage: action.value.errorMessage,
      };

    case actions.setInterestRate:
      return {
        ...state,
        interestRate: action.value.interestRate,
        errorMessage: action.value.errorMessage,
      };

    case actions.setMonthlyPayments:
      return {
        ...state,
        monthlyPayments: action.value.monthlyPayments,
        errorMessage: action.value.errorMessage,
      };

    default:
      return state;
  }
};
