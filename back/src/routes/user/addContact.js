const { Contact } = require("../../db.js").models;

module.exports = async function(req, res, next) {
    console.log('---------- ROUTE USER ADD CONTACT ----------')
    try {
        const { name, publicKey } = req.body;

        const contact = await Contact.create({
            name,
            publicKey
        });

        await req.user.addContact(contact)

        return res.status(200).send("Contact addition succeeded.")
    } catch(error) { next(error) };
};
