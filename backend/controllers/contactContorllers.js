//@desc Get all contacts
//@route Get /api/contacts
//@access public
const asyncHandler = require("express-async-handler");
const getContacts = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Get all contacts"});
});

//@desc Create new contacts
//@route Post /api/contacts
//@access public

const createContact = asyncHandler(async(req, res) => {
    console.log("The request body is :",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({ message: "Create contacts"});
});

//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}`});
});

//@desc Update contact
//@route put /api/contacts
//@access public

const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}`});
});

//@desc Delete contact
//@route delete /api/contacts
//@access public

const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}`});
});

module.exports = { 
getContacts, 
createContact, 
getContact, 
updateContact, 
deleteContact 
};