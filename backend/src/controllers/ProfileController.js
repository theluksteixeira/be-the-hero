const connection = require("../database/connection");

module.exports = {
    async index(req, res) {
        const id_ong = req.headers.authorization;
        const incident = await connection("incidents")
            .where("ong_id", id_ong)
            .select("*");

        return res.json(incident);
    }
};
