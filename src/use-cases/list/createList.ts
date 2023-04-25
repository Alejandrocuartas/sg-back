const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
    apiKey: process.env.MCAPK,
    server: process.env.SERVERPREFIX,
});

const createList = async () => {
    const response = await client.lists.createList({
        name: "sg",
        permission_reminder: "test",
        email_type_option: true,
        contact: {
            company: "company",
            address1: "address1",
            city: "city",
            country: "country",
        },
        campaign_defaults: {
            from_name: "from_name",
            from_email: "Beulah_Ryan@hotmail.com",
            subject: "subject",
            language: "language",
        },
    });
    console.log(response);
    return response
}

export default createList