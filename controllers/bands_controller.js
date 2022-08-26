// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({ 
            order: [ [ 'available_start_time', 'ASC' ] ] 
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})
