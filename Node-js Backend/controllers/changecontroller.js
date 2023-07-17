const db = require("../config");

exports.postsdata = async (req, res) => {
  const id = req.body.id;
 
  try {
    console.log(req.body.id);
    const documentRef = db.collection("Dutys").doc(id);
    const documentSnapshot = await documentRef.get();

    if (!documentSnapshot.exists) {
      console.log("Document not found");
      res.status(404).json({ error: "Document not found" });
      return;
    }

    await documentRef.update({ status: false });
    console.log("Success Update", id);
    res.status(200).json({ message: "Data updated successfully", id });
    
  } catch (error) {
    console.error("Error Delete:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
