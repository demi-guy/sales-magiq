const Job = require("../models/job.model");
const isEmpty = require("is-empty");

module.exports = {
    createJob: async (req, res) => {
        try {
            await Job.create(req.body);
            return res.sendStatus(201);
        } catch (err) {
            res.sendStatus(500);
            console.error(err);
        }
    },
    readJobs: async (req, res) => {
        try {
            let {page, search, selected} = req.query;
            page = Number(page) || 0;
            search = search || "";
            selected = selected || "";
            const data = await Job.aggregate([{
                $match: {
                    $and: [
                        {
                            $or: [
                                { title: new RegExp(search, 'i') },
                                { jobDescription: new RegExp(search, 'i') },
                                { salaryAmount: new RegExp(search, 'i') },
                            ]
                        },
                        {
                            salaryAmount: new RegExp(selected === "all" ? "" : selected, "i"),
                        }
                    ]
                }
            },
            { $skip: 10 * page },
            { $limit: 10 }
        ]);
            res.status(200).json({ data });
        } catch (err) {
            res.sendStatus(500);
            console.error(err);
        }
    },
    readJob: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Job.findById(id);
            res.status(200).json({ data });
        } catch (err) {
            res.sendStatus(500);
            console.error(err);
        }
    },
    updateJob: async (req, res) => {
        try {
            const { id } = req.params;
            await Job.findByIdAndUpdate(id, req.body);
            return res.sendStatus(201);
        } catch (err) {
            res.sendStatus(500);
            console.error(err);
        }
    },

    deleteJob: async (req, res) => {
        try {
            const { id } = req.params;
            await Job.findByIdAndDelete(id);
            res.sendStatus(200);
        } catch (err) {
            res.sendStatus(500);
            console.error(err);
        }
    },
}