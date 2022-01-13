const { Schema, model } = require("mongoose");
const fovorite_product = new Schema({
    reseller_id: {
        type: Schema.Types.ObjectId,
        ref: "reseller",
        require: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "products",
            require: true
        }
    ]
}, { timestamps: true })
module.exports = model("Favorite_product", fovorite_product);