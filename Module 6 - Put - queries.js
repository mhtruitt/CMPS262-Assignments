const getAccounts = "SELECT * FROM video_game_inventory";
const getAccountsById = "SELECT * FROM video_game_inventory WHERE id = $1";
const addNewAccount = "INSERT INTO video_game_inventory (game_title, developer, release_year, game_genre, ign_rating, list_type) VALUES ($1, $2, $3, $4, $5, $6)";
const updateAccount = "UPDATE video_game_inventory SET game_title = $1, developer = $2, release_year = $3, game_genre = $4, ign_rating = $5, list_type = $6 WHERE id = $7";

module.exports = {
    getAccounts,
    getAccountsById,
    addNewAccount,
    updateAccount,
};
