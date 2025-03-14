// Import mongoose library
const mongoose = require("mongoose");

// Create Schemas
//Child Schemas
var ContactSchema = new mongoose.Schema({
    // Name
    delivererName: {
        first: {
            type: String,
            maxlength: 100,
            required: true
        },
        middle: {
            type: String,
            maxlength: 100
        },
        last: {
            type: String,
            maxlength: 100,
            required: true
        }
    },
    // Address
    address: {
        street: {
            type: String,
            maxlength: 100,
            required: true
        },
        city: {
            type: String,
            maxlength: 100,
            required: true
        }
    },
    // Availability
    availability: {
        isavailable: {
            type: Boolean,
            default: false,
            required: true
        },
        dateavail: Date
    },
    // Phone
    phone: {
        type: String,
        maxlength: 50,
        required: true
    },
    // Email
    email: {
        type: String,
        maxlength: 255,
        required: true
    }
});

var DeliverySchema = new mongoose.Schema({
    // IsDelivered
    isdelivered: {
        type: Boolean,
        required: true
    },
    // Delivered Date
    deldate: Date,
    // Pamphlets
    pamphlets: [{
        // Pamphlet Type
        pamtype: {
            type: String,
            required: true,
            enum: ["Supercheap Auto", "Repco", "Farmers", "Pizza Hut", "KFC", "Briscoes"]
        },
        // Bundle Quantity
        bundlequantity: {
            type: Number,
            required: true,
            min: 25,
            max: 2000
        }
    }],
});

var MapSchema = new mongoose.Schema({
    // Map Image
    mapimg: {
        type: String,
        required: true
    },
    // Deliverables
    deliverables: {
        type: Number,
        required: true,
        min: 25,
        max: 500
    }
});

// Parent Schema
const RunSchema = new mongoose.Schema({
    title: { type: String, maxlength: 100 },
    contact: ContactSchema,
    delivery: DeliverySchema,
    map: MapSchema
});

// Create Model for Run Schema
const Run = mongoose.model("Run", RunSchema);

// Export Run Model
module.exports = Run;