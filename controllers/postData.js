const { response } = require('express');
const DataRev = require('../models/dataRev');

const updateData = async(req, res = response) => {
    try {
        DataRev.deleteMany({}, function(err){
            if(err){
                console.log(err);
            }else{
                console.log('Database cleaned!!');
            }
        });
    
        const newData = new DataRev(req.body);
        await newData.save();

        res.json({
            ok: true,
            newData
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
}

module.exports = {
    updateData
}