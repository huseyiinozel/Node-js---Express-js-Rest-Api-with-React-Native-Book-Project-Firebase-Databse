const db = require("../config");

exports.postdata = async (req, res) => {

  
  const data = req.body
  
  
  console.log("postdata çalıştı")
  try {
    const docRef = await db.collection("Dutys").add(data);
    console.log("Success Add", docRef.id);
    
    res.status(200).json({ message: "Data added successfully", documentId: docRef.id });

    
  } catch (error) {
    console.error("Error Add:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

