const Monster = require('./monModel')
const Mongoose = require('mongoose')
const router = require('express').Router()

// XIV API version
module.exports = xiv => {

    // When the router detects a GET request for the list of monsters,
    // It gets the list of BNpcName from XIVAPI
    router.get('/list/:page', (req, res) => {
        let page = req.params.page
console.log("Requested Page: ", {page: page})
        xiv.data.list(`BNpcName?page=${page}`).then((response) => {
            let result = []
            let pagination = response.Pagination
console.log("Current Page: ", pagination.Page)

            let count = Object.keys(response.Results).length

            for(let i = 0; i < count; i++) {
                if(response.Results[i].Name === ''){
                    // ID: 1 has no name, cleansing that.
                } else {
                    temp = response.Results[i]
                    result.push({ "id": temp.ID, "name": temp.Name })
                }
            }
            res.json({ data: result, pagination : pagination })
        }).catch((error) => {
            console.error("Error fetching the monster list", error)
        })
    })

    router.get('/:id', (req, res) => {
        xiv.data.get("BNpcName", req.params.id).then((response) => {
            // FUTURE: Use MobHuntTarget & MonsterNoteTarget to get more info
            // Mob Hunt Target is data on Hunt Bills
            // Monster Note Target is data on Hunting Log

            let result = {
                name: response.Name,
                version: {
                    number: response.GamePatch.Version,
                    name: response.GamePatch.Name
                },
            }

            res.json({ data: result })
        }).catch((error) => {
            console.error(`Error fetching monster ID ${req.params.id}`, error)
          })
    })

    // Get Latest News from XIVAPI (as a test sample)
    router.get("/news", (req, res) => {
      xiv.lodestone().then((response) => {
        let entry = response.News[0]
  
        let timeNow = new Date()
        let diff = new Date(timeNow - entry.Time)
  
        let result = `${entry.Title} (published ${diff.getUTCMinutes()} minutes ago at ${entry.Time} - currently ${timeNow})`
        res.json({ data: result })
      }).catch((error) => {
        console.error("Error fetching news", error)
      })
    })

    return router
}


/* MongoDB version
module.exports = db => {

    // Magic Method that catches errors
    const wrapAsync = handler => (req, res) => handler(req)
        .then(result => res.json(result))
        .catch(error => res.status(500).json({ error: error.message }))

    // When the router detects a GET request for monsters, it reads the database
    router.get('/', wrapAsync(async function(req) {
        return db.collection('Monsters').find().sort({ name: 1 }).toArray()
    }))

    // When the router detects a GET request for a specific monster page, it also retrieves
    // the monster from the database
    router.get('/single', wrapAsync(async function(req) {
        return db.collection('Monsters').findOne(req.body.webname)
    }))

    // When the router detects a POST request for /monsters, it adds a new entry
    router.post('/', wrapAsync(async function(req) {
        const mon = new Monster(req.body)
        await db.collection('Monsters').insertOne(mon)
        return { mon }
    }))

    // When the router detects a DELETE request, it reads the ID and deletes the entry at that point
    router.delete('/:id', wrapAsync(async function(req) {
        const { result } = await db.collection('Monsters').deleteOne({
            _id: Mongoose.Types.ObjectId(req.params.id)
        })
        return { result }
    }))

    return router
}
*/