import errorHandler from "../error/error.js";
import { Reservation } from "../Models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  console.log("Incoming req.body:", req.body);
  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new errorHandler("Please fill the full reservation form!", 400));
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    return res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    console.error("ERROR CAUGHT:", error);
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new errorHandler(validationErrors.join(", "), 400));
    }

    return next(new errorHandler("Something went wrong!", 500));
  }
};
