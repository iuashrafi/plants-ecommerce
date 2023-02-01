const mongoose = require("mongoose");
const UserAddressSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    address_line1: {
      type: String,
    },
    address_line2: {
      type: String,
    },
    city: {
      type: String,
    },
    postal_code: {
      type: String,
    },
    country: {
      type: String,
    },
    mobile: {
      type: String,
    },
  },
  { timestamps: true }
);

export default UserAddress = mongoose.model("UserAddress", UserAddressSchema);
