const db = require("../config");

exports.getsdata = async function(req, res, next) {
  try {
    const snapshot = await db.collection("Dutys").where("status", "==", false).get();


    const data = [];
    snapshot.forEach((doc) => {
      data.push(doc.data());
    });
    console.log(data)
    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};