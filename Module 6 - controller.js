const pool = require("./database");
const queries = require("./queries");

const getAccounts = (req, res) => {
    pool.query(queries.getAccounts, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//Controller: Filters on Account ID
//Author: Morgan Truitt
//Date: 3/7/2026
const getAccountsById = (req, res) => {
    const { id } = req.params;
    if(isNaN(id)) {
        return res.status(400).json({error: "Invalid account ID"});
    }
    console.log("Received request for account ID");
    pool.query(queries.getAccountsById, [id], (error, results) => {
        if (error) {
            console.error("Database query error:", error);
            return res.status(500).json({error: "Internal server error"});
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getAccounts,
    getAccountsById,
};
