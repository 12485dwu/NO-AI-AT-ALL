const asyncHandler = require("express-async-handler");
const supabase = require("../supabase-clients");

//@desc Get all contacts
//@route Get /api/contacts
//@access public
const getContacts = asyncHandler(async(req, res) => {
    const {data, error} = await supabase
        .from("contacts")
        .select("*");
    if (error) {
        res.status(400);
        throw new Error(error.message);
    }

    res.status(200).json({ data, message: "Get all contacts" });
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

    const { data, error } = await supabase
        .from("contacts")
        .insert([{ name, email, phone }])
        .select("*");

    if(error){
        res.status(400);
        throw new Error(error.message)
    }

    res.status(201).json({data: data[0], message: " create a new contact"});
});

//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContact = asyncHandler(async(req, res) => {
    const {data, error} = await supabase
        .from('contacts')
        .select("*")
        .eq('id', req.params.id)
        .single();

    if (error) {
        res.status(404);
        throw new Error("Contact not found")
    }

    res.status(200).json({data,  message: `Get contacts for ${req.params.id}`});
});

//@desc Update contact
//@route put /api/contacts
//@access public

const updateContact = asyncHandler(async(req, res) => {
    const {data, error} = await supabase
        .from('contacts')
        .update(req.body)
        .eq('id', req.params.id)
        .select();

    if (error) {
        res.status(400);
        throw new Error(error.message);
    }

    res.status(200).json(data[0], { data: data[0], message: `Update contacts for ${req.params.id}`});
});

//@desc Delete contact
//@route delete /api/contacts
//@access public

const deleteContact = asyncHandler(async(req, res) => {
    const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', req.params.id);

    if (error) {
        res.status(400);
        throw new Error(error.message);
    }

    res.status(200).json({ message: `Delete contacts for ${req.params.id}`});
});

module.exports = { 
getContacts, 
createContact, 
getContact, 
updateContact, 
deleteContact 
};