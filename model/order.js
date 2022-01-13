const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
    product: {
        product_id: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        variation: {
            type: Schema.Types.ObjectId,
        },

        product_title: {
            type: String
        },
        product_sku: {
            type: String
        },
        qty: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        product_images: {
            original: {
                type: String
            },
            originalURL: {
                type: String
            },
            reduce: {
                type: String
            },
            reduceURL: {
                type: String
            },
            medium: {
                type: String
            },
            mediumURL: {
                type: String
            },
        }
    },
    vendor_id: {
        type: Schema.Types.ObjectId,
        ref: "vendor"
    },
    groupOrder_id: {
        type: Schema.Types.ObjectId
    },
    groupOrder_name:{
        type:String
    },
    discount: {
        type: Number
    },
    total: {
        type: Number,
        required: true
    },
    gst: {
        type: Number
    },
    grand_total: {
        type: Number,
        required: true
    },
    reseller_name: {
        type: String
    },
    reseller_by: {
        type: Schema.Types.ObjectId,
        required: true
    },
    delivery_address: {
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
        }
    },
    // ------------------------------------------------------------------------------------ //
    order_status: {
        type: String,
        enum: ["pending", "completed", "cancel"],
        default: "pending"
    },
    payment: {
        payment_type: {
            type: String,
            enum: ["cod", "online"],
            required: true
        }
    },
    order_tracking_status: {
        type: String,
        required: true,
        enum: ['ordered', 'onhold', 'ready_for_dispatch', 'collection_mem_received', 'collection_boy_received', 'delivery_boy_received', 'reseller_received', 'cancel', 'completed', "loss"],
            
        default: 'ordered'
    },
    order_tracking: [{
        type: Schema(
            {
                updated_by: {
                    updated_user_type: {
                        type: String,
                        enum: ["vendor", "Reseller", "collection_boy", "collection_point", "delivery_boy"]
                    },
                    updated_user_id: {
                        type: Schema.Types.ObjectId,
                        required: true,
                        refPath: "updated_type"
                    },
                    updated_type: {
                        type: String,
                        // required: true,
                        enum: ["vendor", "reseller", "collection_boy", "collection_point", "delivery_boy"]
                    }
                },
                status: {
                    type: String,
                },
                reason_for_cancel: {
                    type: String
                }
            }, { timestamps: true }
        )
    }],
    completed_order_proof: {
        original: {
            type: String
        },
        originalURL: {
            type: String
        },
        reduce: {
            type: String
        },
        reduceURL: {
            type: String
        },
        medium: {
            type: String
        },
        mediumURL: {
            type: String
        },
        small: {
            type: String
        },
        smallURL: {
            type: String
        }
    }

}, { timestamps: true })

module.exports = model("Order", orderSchema)