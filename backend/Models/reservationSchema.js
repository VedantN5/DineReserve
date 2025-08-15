import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
       type: String,
       required: true,
       minlength: [3,'it should be atleast of 3 characters'],
       maxlength: [30,'max limit is 30 characters'],
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3,'it should be atleast of 3 characters'],
        maxlength: [30,'max limit is 30 characters'],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'provide valid email'],
    },
    phone: {
        type: String,
        required: true,
        minlength: [10,'max 10 characters'],
        maxlength: [10,'max 10 characters'],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema )