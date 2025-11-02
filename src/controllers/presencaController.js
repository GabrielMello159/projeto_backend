const presencaService = require('../services/presencaService')

class PresencaController {
    async getAll(req, res) {
        try {
            const presencas = await presencaService.findAll()
            res.status(200).json(presencas)
        } catch (error) {
            console.error('Erro ao buscar presenças:', error)
            res.status(500).json({ message: 'Erro ao buscar presenças' })
        }
    }

    async create(req, res) {
        try {
            const presenca = await presencaService.create(req.body)
            res.status(201).json(presenca)
        } catch (error) {
            console.error('Erro ao criar presença:', error)
            res.status(400).json({ message: 'Erro ao criar presença' })
        }
    }
}


module.exports = new PresencaController()
