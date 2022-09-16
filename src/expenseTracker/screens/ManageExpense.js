import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../components/styles";
import Button from "../UI/Button";
import { ExpenseContext } from "../../../store/context/expenses-context";
import ExpenseForm from "../components/manageInput/ExpenseForm";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpenseContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // converted a value to boolean

  const selectedExpense = expensesCtx.expenses.find(
    (expenses) => expenses.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpenses(editedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };

  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpenses(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpenses(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues = {selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
