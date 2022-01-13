const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let image = new Schema({
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
})


let aadhar_card = new Schema({
    aadhar_card_number: {
        type: Number,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    aadhar_card_name: {
        type: String,
        required: true
    }
})

let bank_detail = new Schema({
    bank_name: {
        type: String,
        required: true
    },
    bank_ifsc_code: {
        type: String,
        required: true
    },
    account_number: {
        type: String,
        required: true
    },
    account_holder_name: {
        type: String,
        required: true
    }
})

let vendor_auth = new Schema({
    mobileno: {
        type: Number,
        required: true
    },
    emailid: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: true
    },
    vendor_name: {
        type: String,
        match: [/^[a-zA-Z0-9]{4,45}$/, "please enter proper name no specical character allowed vendor name size must around 4 to 45"]
    },
    vendor_description: {
        type: String
    },
    password: {
        type: String
    },
    shop_cover_img: {
        // type: image
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
    // vendor_profile_img: {
    //     type: image
    // },
    vendor_profile_img: {
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
    shop_address: {
        type: String
    },
    shop_google: [],
    gstno: {
        type: String
    },
    is_mobile_verified: {
        type: Boolean,
        default: false
    },
    is_email_verified: {
        type: Boolean,
        default: false
    },
    status_verified: {
        type: Boolean,
        default: false
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    //images
    aadhar_card_front_img: {
        type: image
    },
    aadhar_card_back_img: {
        type: image
    },
    address_proof_img: {
        type: image
    },
    cancel_check_img: {
        type: image
    },
    follower_user: [],
    ip_address: [],
    shop_name: {
        type: String
    },
    location: {
        state: {
            type: String
        },
        city: {
            type: String
        },
        pincode: {
            type: Number
        },
        market_place: {
            type: String
        }
    },
    verification: {
        aadhar_card_verified: {
            type: String,
            enum: ["pending", "accept", "reject"],
            default: "pending",
            required: true
        },
        address_proof_verified: {
            type: String,
            enum: ["pending", "accept", "reject"],
            default: "pending",
            required: true

        },
        bank_detail_verified: {
            type: String,
            enum: ["pending", "accept", "reject"],
            default: "pending",
            required: true

        }
    },
    status: {
        type: String,
        enum: ["active", "pending", "inactive"],
        default: "pending",
        required: true

    }, // active pending inactive

    aadhar_card: {
        type: aadhar_card
    },
    rejected_list: [
        {
            rejected_type: {
                type: String,
                enum: ["aadhar", "address", "bank"]
            },
            rejected_reason: {
                type: String
            }
        }
    ],
    bank_detail: {
        type: bank_detail
    },

    market_place: {
        type: String
    },
    social_media: {
        instagram_link: {
            type: String
        },
        facebook_link: {
            type: String
        },
        pinterest_link: {
            type: String
        }
    },
    transaction_date:{
        type:Date
    },
    transaction_amount:{
        type:Number
    },
    is_beseller:{
        type:String,
        required:true,
        default:false
    }

}, { timestamps: true });



module.exports = mongoose.model('vendor', vendor_auth);
