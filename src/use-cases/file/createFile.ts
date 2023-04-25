const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
    apiKey: process.env.MCAPK,
    server: process.env.SERVERPREFIX,
});


const createFile = () => {

}

export default createFile