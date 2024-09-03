const express = require("express");
const router = express.Router();
const Person = require("./../model/Person");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const person = new Person(data);
    const newPerson = await person.save();
    console.log("save successfully !!");
    return res.status(200).json(newPerson);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error !!" });
  }
});

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    return res.status(200).json(persons);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error !!" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    console.log(`some problem ${updatedPerson}`);
    if (!updatedPerson) {
      return res.status(404).json({
        message: "Not Found !!",
      });
    }
    return res.status(200).json(updatedPerson);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error !!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPerson = await Person.findByIdAndDelete(id);
    if (!deletedPerson) {
      return res.status(404).json({ message: "Not Found !!" });
    }
    return res.status(200).json({ message: "deleted successfully !!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error !!" });
  }
});
//some changes will put here
module.exports = router;
