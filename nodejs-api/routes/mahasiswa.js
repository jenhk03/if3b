// routes mhs
const express = require('express')
const { deleteOne } = require('../models/mahasiswa')
const router = express.Router()
const Mahasiswa = require('../models/mahasiswa')
const verifyToken = require('../config/verifyToken')

// Read
router.get('/', verifyToken, async(req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find()
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

// Create Data Mhs
router.post('/', async(req, res) => {
    const mahasiswaPost = new Mahasiswa({
        nama: req.body.nama,
        alamat: req.body.alamat
    })
    try {
        const mahasiswa = await mahasiswaPost.save()
        res.json(mahasiswa)
    }
    catch (error) {
        res.json({message: error})
    }
})

// Read method GET
router.get('/', async(req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find()
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Update
router.put('/:mahasiswaId', async (req, res) => {
    const data = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }
    try {
        // update here
        const mahasiswa = await Mahasiswa.updateOne({
            _id: req.params.mahasiswaId
        }, data)
        // response success
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// DELETE
router.delete('/:iddata', async(req, res) => {
    try {
        const mahasiswa = await Mahasiswa.deleteOne({_id: req.params.iddata})
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})
module.exports = router