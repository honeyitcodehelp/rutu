const { model, Schema } = require("mongoose");

let address=new Schema({
    mobileno_for_address: {
        type: Number,
        required: true
    },
    address_name: {
        type: String
    },
    state: {
        type: String,   
        required: [true, "state is required"]
    },
    city: {
        type: String,
        required: [true, "city is required"]

    },
    pincode: {
        type: String,
        required: [true, "pincode is necessary for deliver the prodcut"]
    },
    address_descrption: {
        type: String,
        min: [1, "atleast have something"]

    },
    is_default: {
        type: Boolean,
        default: false
    }
},{timestamps:true})
const resellerSchema = new Schema({
    first_name: {
        type: String,
        minLength: [1, "at least have one character as first name"],
        maxLength: [255, "name is too big right something small name"],
        required: true
    },
    last_name: {
        type: String,
        minLength: [1, "at least have one character as first name"],
        maxLength: [255, "name is too big right something small name"],
        required: true
    },
    mobileno: {
        type: Number,
        required: true,
        unique: true
    },
    pending_vendor_request: [{ type: Schema.Types.ObjectId, ref: "vendor" }],
    following_vendor: [{ type: Schema.Types.ObjectId, ref: "vendor" }],
    password: {
        type: String,
        required: true
    },
    emailid: {
        type: String
    },
    address: [{
        type:address
    }],
    profile_image: {
        original: {
            type: String,
        },
        reduce: {
            type: String
        },
        medium: {
            type: String
        },
        small: {
            type: String
        },
        originalURL: {
            type: String,
        },
        reduceURL: {
            type: String
        },
        mediumURL: {
            type: String
        },
        smallURL: {
            type: String
        }
    },
    status: {
        type: String,
        enum: ["active", "deactive"],
        default: "active"
    }

}, { timestamps: true })

module.exports = model("Reseller", resellerSchema)