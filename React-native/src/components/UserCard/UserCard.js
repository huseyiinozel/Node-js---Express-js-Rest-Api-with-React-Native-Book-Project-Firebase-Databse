import React from "react";
import { View,Text,StyleSheet,TouchableOpacity,SafeAreaView } from "react-native";
import useChange from "../../hooks/UseChange/UseChange";


const UserCard = ({ data, page , status , docid}) => {

  const { post } = useChange(docid);

  function handlechange() {
    
    post(docid);
  }


  
  return (
    <SafeAreaView>



    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
      
      {page && (
        <TouchableOpacity  onPress={handlechange}>
          <Text style={styles.text2}>Finished</Text>
        </TouchableOpacity>
      )}
    </View>
    </SafeAreaView>
  );
};
export default UserCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    marginVertical: 5,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  email: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'gray',
    marginLeft: 5,
  },
  text: {
    fontWeight: 'bold',

  },
  text2:{
    fontWeight: 'bold',
    color:"red"
  }
});






