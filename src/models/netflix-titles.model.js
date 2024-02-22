const sql = require('../config/db');

class NetflixTitlesModel {
    constructor() {
        this.table_name = 'netflix_titles';
    }

    /**
     * Cette fonction trouve et retourne des titres par pagination
     * @param {*} offset Index dans la base de données ou la pagination devrait commencer
     * @param {*} limit Le nombre de titres par page
     * @param {*} fields Les champs à retourner dans la réponse
     * @param {*} filters Les filtres pour la requête
     * @returns 
     */
    trouverTitresOffset(offset, limit, fields = [], page_type) {
        return new Promise((resolve, reject) => {
            let requete = "SELECT ";

            if (fields && fields.length > 0) {
                fields.forEach((element, idx) => {
                    requete += `\`${element}\`${idx >= fields.length - 1 ? '' : ', '}`;
                });
            } else {
                requete += '*';
            }

            const show_type = page_type === 'film' ? 'Movie' : 'Tv Series';
            requete += ' FROM `netflix_titles` WHERE `show_type` = ? LIMIT ?, ?;';

            sql.query(requete, [show_type, offset, limit], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    }
}

module.exports = NetflixTitlesModel;