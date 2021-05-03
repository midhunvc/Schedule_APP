const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../public/docs/swagger/swagger.json');

const swaggerRender = (req,res) => {
    swaggerDocument.host = req.get('host');
    const options = {
        customSiteTitle: 'Schedule app API doc',
    };
    swaggerUi.setup(swaggerDocument,options)(req,res);
};

module.exports = swaggerRender;