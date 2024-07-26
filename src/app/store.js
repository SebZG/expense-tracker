import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/budgets/budgetsSlice.js";
import budgetReducer from "../features/budgets/budgetsSlice.js";

export default configureStore({
   reducer: {
      transactions: transactionsReducer,
      budgets: budgetReducer
   }
});