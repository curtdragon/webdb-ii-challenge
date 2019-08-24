const express = require("express");

const db = require();
const router = express.Router();

//GET cars
router.get("/", (req, res) => {
    db("cars")
    .then(cars => {
        res.json(cars);
    })
    .catch(error => {
        res.status(500).json({
            message: "Failed to retrieve cars"
        });
    });
});

//GET car by ID
router.get("/:id", (req, res) => {
    const {id} =req.params;

    db("cars").where({id})
    .then(cars => {
        const car=cars[0];
        if (car) {
            res.json(cars);
        } else {
            res.status(404).json({
                message: "Car not found"
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            message: "Unable to retrieve car"
        });
    });
});

//POST cars
router.post("/", (req, res) => {
    const carData = req.body;

    db("cars").insert(carData)
    .then(ids=> {
        res.status(201).json({
            newCarID: ids[0]
        });
    })
    .catch(error => {
        res.status(500).json({
            message: "Failed to add car",
            error
        });
    });
});

//PUT cars
router.put("/:id", (req, res) => {
    const changes=req.body;
    const {id} = req.params;

    db("cars").where({id}).update(changes)
    .then(count => {
        if (count) {
            res.json({
                updated: count
            });
        } else {
            res.status(400).json({
                message: "Invalid car ID"
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            message: "Failed to update car"
        });
    });
});
//DElETE cars
router.delete("/:id", (req, res) => {
    const {id} = req.params;

    db("cars").where({id}).del()
    .then(count => {
        if (count) {
            res.json({
                deleted: count
            })
        } else {
            res.status(404).json({
                message: "Invalid car ID"
            })
        }
    })
    .catch(error => {
        res.json({
            message: "Unable to delete car"
        });
    });
});

module.exports = router;