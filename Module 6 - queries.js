const getAccounts = "SELECT * FROM video_game_inventory";
const getAccountsById = "SELECT * FROM video_game_inventory WHERE id = $1";

module.exports = {
    getAccounts,
    getAccountsById,
};
