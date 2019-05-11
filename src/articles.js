/* eslint-disable */
//airtable
const Airtable = require("airtable");
//const base = airtable.base("appH81X67TStprrkF");
var base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY || "keyITmskJgGkevh3j",
    }).base(process.env.AIRTABLE_BASE_ID || "app5cUNhi6XgdnSM7" );
const news = base("Weekly Report");
const table = news.select({view: "Main View"})  //, pageSize: 100 })

let allRecords = [];

//module.exports = allRecords;
exports.getDatas = function(){

return new Promise(function(resolve, reject) {
    table.all().then(records => {
      resolve(records);
    }).catch(err => {
        // Handle error.
        console.log("error on all fetch airtable")
    })

  });

};
/* eslint-disable */
