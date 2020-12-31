const { response } = require('express');

const DataRev = require('../models/dataRev');

const getData = async(req,res = response) => {
    const records = await DataRev.find({},function(err,users){});
    res.json({
        'ok': true,
        records
    });
}

module.exports = {
    getData
}