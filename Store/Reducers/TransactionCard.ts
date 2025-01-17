import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardTransactions } from "../Apis/CardTransactions";

interface CardTransactionsState {
  cardtransactions: any | null;
  authenticatingcardtransactions: boolean;
  authenticated: boolean;
  isError: boolean;
  errors: { error: string; status?: number } | null;
}

const initialState: CardTransactionsState = {
  cardtransactions: null,
  authenticatingcardtransactions: false,
  authenticated: false,
  isError: false,
  errors: null
};

export const CardTransactionsSlice = createSlice({
  name: "cardtransactions",
  initialState,
  reducers: {
    clearStatecardtransaction: (state) => {
      state.cardtransactions = null;
      state.authenticatingcardtransactions = false;
      state.authenticated = false;
      state.isError = false;
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(CardTransactions.pending, (state) => {
        console.log("CardTransaction pending...");
        state.authenticatingcardtransactions = true;
        state.authenticated = false;
        state.isError = false;
        state.errors = null;
      })
      .addCase(
        CardTransactions.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log("CardTransaction.fulfilled payload:", action.payload);
          state.authenticatingcardtransactions = false;
          state.authenticated = true;
          state.cardtransactions = action.payload;
        }
      )
      .addCase(CardTransactions.rejected, (state, action) => {
        console.log("CardTransaction rejected:", action.payload);
        state.authenticatingcardtransactions = false;
        state.authenticated = false;
        state.isError = true;
        state.errors = action.payload || { error: "Unknown error occurred." };
      });
  }
});

export const { clearStatecardtransaction } = CardTransactionsSlice.actions;

export const CardTransactionsSelector = (state: {
  cardtransactions: CardTransactionsState;
}) => state.cardtransactions;

export default CardTransactionsSlice.reducer;
