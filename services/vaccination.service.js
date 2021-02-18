const express = require('express')
const CSVToJSON = require('csvtojson');
const fs = require('fs');

module.exports = {
    getTestData: (req, res) => {
        console.log('getData');
        const data = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

        return res.status(200).json({ data: data })
    },

    getVaccData: (req, res) => {
        CSVToJSON({
            delimiter: ';',
            trim: true,
        }).fromFile('data/timeline-bundeslaendermeldungen.csv')
            .then(vaccData => {
                return res.status(200).json({ vaccData: vaccData })
            }).catch(err => {
                // log error if any
                console.log(err);
                return res.status(500)
            });
    },

    downloadData: (req, res) => {

        console.log('start download');
        const https = require("https");
        const file = fs.createWriteStream("data/timeline-bundeslaendermeldungen.csv");

        https.get("https://info.gesundheitsministerium.gv.at/data/timeline-eimpfpass.csv", response => {
            response.pipe(file);
        });
        console.log('end download');

        return res.status(200).send({ status: "download done" });
    },

}