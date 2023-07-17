import React,{useEffect} from "react"
import { SafeAreaView,View,Text,ActivityIndicator,FlatList,ScrollView,TouchableOpacity } from "react-native"
import useFetch from "../../hooks/UseFetch/UseFetch";
import styles from "./Old.style"
import UserCard from "../../components/UserCard/UserCard";
function Old() {
  const url = "http://192.168.1.94:3000/false";
  const { loading, data, error, fetchData } = useFetch(url);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderUser = ({ item }) => <UserCard data={item.data} />;

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
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

export default Old