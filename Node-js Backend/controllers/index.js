const db = require("../config");

exports.getdata = async function(req, res, next) {
  try {
    const snapshot = await db.collection("Dutys").where("status", "==", true).get();

    const data = [];
    snapshot.forEach((doc) => {
      const documentData = doc.data();
      const documentId = doc.id;
      data.push({ id: documentId, ...documentData });
    });

    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
