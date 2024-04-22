import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from 'react-native';
import styles from "./styles.js";

export default function AddForm({ setExpenses, chartData, setChartData, toggleAddForm, categories }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const addExpense = () => {
    const amountNumber = parseInt(amount);
    if (amountNumber > 0 && name) {
      const newExpense = {
        id: new Date().getTime(),
        name,
        amount: amountNumber,
        category,
      };
      setExpenses(prevExpenses => [...prevExpenses, newExpense]);

      const updatedChartData = chartData.map(item => {
        if (item.name === category) {
          return { ...item, amount: item.amount + amountNumber };
        }
        return item;
      });
      setChartData(updatedChartData);

      toggleAddForm(); // Close form after adding
      setName("");
      setAmount("");
    } else {
      alert("Please enter a valid name and amount.");
    }
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.heading}>Add New Expense</Text>

      <Text style={styles.label}>Expense Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter the expense name"
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        value={amount}
        onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ""))}
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
        style={styles.input}
      >
        {categories.map((category, index) => (
          <Picker.Item key={index} label={category} value={category} />
        ))}
      </Picker>

      <Button onPress={addExpense} title="Add Expense" />
      <Button onPress={toggleAddForm} title="Cancel" />
    </View>
  );
}
