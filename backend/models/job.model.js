const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    companyName: String,
    managerName: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    roleType: String,
    title: String,
    compensationType: String,
    salaryAmount: String,
    ote: String,
    inboundLeads: Boolean,
    prospectingRequired: Boolean,
    averageOrder: String,
    industry: String,
    jobDescription: String,
    customerSupport: Boolean,
    createdDate: String,
    expirationDate: String,
    status: String,
    companyDescription: String,
    companyUrl: String,
    headerImageUrl: String,
});

module.exports = mongoose.model("Job", jobSchema);