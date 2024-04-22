import React from "react";
import { ScrollView, View, Text, Button } from "react-native";


import styles from "./styles.js";

export default function ExpenseComponent({ expenses, setExpenses, chartData, setChartData }) {
  const deleteExpense = (id, amount, category) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);

    const updatedChartData = chartData.map(item => {
      if (item.name === category) {
        return { ...item, amount: item.amount - amount };
      }
      return item;
    });
    setChartData(updatedChartData);
  };

  return (
    <ScrollView style={styles.scrollView}>
      {expenses.map((expense) => (
        <View key={expense.id} style={styles.expenseTile}>
          <Text style={styles.expenseTileText}>{expense.name}</Text>
          <Text style={styles.expenseTileText}>{expense.category}</Text>
          <Text style={styles.expenseTileText}>{expense.amount}</Text>
          <Button
            onPress={() => deleteExpense(expense.id, expense.amount, expense.category)}
            title="Delete"
          />
        </View>
      ))}
    </ScrollView>
  );
}
