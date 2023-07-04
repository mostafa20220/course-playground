const { log } = require('console');
const e = require('express');
const express = require('express');

const router = express.Router();

const locationStorage = {
    locations: []
};

router.post('/add-location', (req, res) => {
  const id = Math.random()*10;
    locationStorage.locations.push({
        id: id,
        address: req.body.address,
        lat: req.body.lat,
        lng: req.body.lng
    });
    res.json({message: 'Stored location!', locId: id});
});

router.get('/location/:locId', (req, res) => {
    if(!locationStorage.locations || locationStorage.locations.length === 0){
        return res.status(404).json({message: 'No locations Saved Yet!'});
        // return res.json({message: 'No location found!'});
    }
    const locationObj = locationStorage.locations.find(loc => loc.id === +req.params.locId);

    if(!locationObj){
        return res.status(404).json({message: 'No location found!'});
    }
    res.json(locationObj);
});

// export router as module
module.exports = router;