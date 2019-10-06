module.exports = {
  submit: async function(req, res) {
    const { firstName, lastName, email, occupation, city, bio } = req.body;
    const addForm = await req.app
      .get("db")
      .submitForm([firstName, lastName, email, occupation, city, bio]);
    return res.status(200).send(addForm);
  }
};
