const {Schema, model} = require('mongoose');

const DataRevSchema = Schema({
    disp: {
        type: String,
        required: true
    },

    action:{
        type: String,
        required: true
    }

},{
    timestamps: true
});

module.exports = model('DataRev',DataRevSchema);