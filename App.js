import React, { useState } from "react";
import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Gold Necklace", price: 15000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Pearl Earrings", price: 8500, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Bracelet", price: 7000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Gold Ring", price: 5000, image: "https://via.placeholder.com/150" }
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AlQaimJewelry</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>PKR {item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <View style={styles.cart}>
        <Text style={styles.cartTitle}>Cart</Text>
        {cart.length === 0 ? (
          <Text>No items in cart</Text>
        ) : (
          <>
            {cart.map((item, i) => (
              <Text key={i}>{item.name} - PKR {item.price}</Text>
            ))}
            <Text style={styles.total}>Total: PKR {total}</Text>
            <TouchableOpacity style={styles.checkout}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  card: { backgroundColor: "#f9f9f9", padding: 10, marginBottom: 10, borderRadius: 8 },
  image: { width: "100%", height: 150, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: "bold", marginVertical: 5 },
  price: { fontSize: 16, marginBottom: 5 },
  cart: { marginTop: 20, padding: 10, borderTopWidth: 1, borderColor: "#ccc" },
  cartTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 5 },
  checkout: { backgroundColor: "#FFD700", padding: 10, marginTop: 10, borderRadius: 5 },
  checkoutText: { textAlign: "center", fontWeight: "bold" }
});
