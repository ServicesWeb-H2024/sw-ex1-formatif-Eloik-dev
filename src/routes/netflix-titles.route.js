const router = require('express').Router();
const NetflixTitlesController = require('../controllers/netflix-titles.controller');

const VALID_TITLE_TYPES = ['film', 'serie'];

router.get('/:type_titre', async (req, res) => {
    const type_titre = req.params.type_titre;

    if (!VALID_TITLE_TYPES.includes(type_titre)) {
        return res.status(400).send(({ "erreur": `Le type ${type_titre} est invalide` }))
    }

    const page = parseInt(req.query.page);
    if (isNaN(page)) {
        return res.status(403).send(({ "erreur": `La page ${req.query.page} est invalide` }))
    }

    res.status(200).send(await (new NetflixTitlesController()).obtenirRequetePaginee(type_titre, page, `/api/titres/${type_titre}`))
});

module.exports = router;
