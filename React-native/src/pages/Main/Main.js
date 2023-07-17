import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Button, ActivityIndicator, FlatList, TouchableOpacity, TextInput, ScrollView } from "react-native";
import UserCard from "../../components/UserCard/UserCard";
import useFetch from "../../hooks/UseFetch";
import usePost from "../../hooks/UsePost";
import styles from "./Main.style";

function Main() {
  const url = "http://192.168.1.94:3000/";

  const { loading, data, error, fetchData } = useFetch(url);
  

  const [word, setWord] = useState("");
  const { post,datas } = usePost();

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, []);


  async function handlego() {
    post({ data: word, status: true })
      .then(() => {
        setWord("");
        fetchData();
      })
      .catch((error) => {
        console.error("Error occurred while posting data:", error);
      });
  }
  

  const renderUser = ({ item }) => <UserCard data={item.data} status={item.status}  docid={item.id} page={true} />;

  
  

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            placeholder="Add Book"
            placeholderTextColor="white"
            style={styles.input}
            value={word}
            onChangeText={setWord}
          />
          <TouchableOpacity style={styles.button} onPress={handlego}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} disabled>
            <Text style={styles.buttonText}>Book List</Text>
          </TouchableOpacity>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList data={data.data} renderItem={renderUser} />
          )}
          




        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Main;
