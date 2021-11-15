const mongoose = require('mongoose');

const { Schema } = mongoose;

const subscriberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

// Export the model that allow us to interact with the DB
module.exports = mongoose.model('Subscriber', subscriberSchema)
