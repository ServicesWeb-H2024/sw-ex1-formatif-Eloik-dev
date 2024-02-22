const NetflixTitlesModel = require('../models/netflix-titles.model');

class NetflixTitlesController extends NetflixTitlesModel {
    async obtenirRequetePaginee(page_type, page, url) {
        const titres = await this.trouverTitresOffset(Number(page), 10, ['show_id', 'title'], page_type);

        return {
            "titres": titres,
            "filtre": page_type,
            "page": page,
            "url_page_suivante": `${url}?page=${page + 1}`
        };
    }
}

module.exports = NetflixTitlesController;