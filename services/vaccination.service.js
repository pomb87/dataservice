const express = require('express')
const CSVToJSON = require('csvtojson');
const fs = require('fs');

module.exports = {
    getTestData: (req, res) => {
        console.log('getData');
        const data = {
            'Number 9': 1.99,
            'Number 9 Large': 2.99,
            'Number 6 with Extra Dip': 3.25,
            'Number 7': 3.99,
            'Number 45': 3.45
        }

        return res.status(200).json({ data: data })
    },

    getVaccData: (req, res) => {
        CSVToJSON().fromFile('data/timeline-bundeslaendermeldungen.csv')
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