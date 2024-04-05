const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllSurveys = async(req, res) => {
    try {
        const surveys = await prisma.survey.findMany();
        res.status(200).json(surveys);
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: error.message });
    }
}

const getSurveyById = async(req, res) => {
    const id = parseInt(req.params.id);
    try {
        const survey = await prisma.survey.findUnique({ where: { id } });
        if (survey == null) {
            return res.status(404).json({ message: 'Survey not found' });
        }
        res.status(200).json(survey);
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: error.message });
    }
}

const createSurvey = async(req, res) => {
    const data = req.body;
    // Validate input
    try {
        const newSurvey = await prisma.survey.create({ data });
        res.status(201).json(newSurvey);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateSurvey = async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const updatedSurvey = await prisma.survey.update({ where: { id }, data });
        res.status(200).json(updatedSurvey);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteSurvey = async(req, res) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.survey.delete({ where: { id } })
        res.status(200).json({ message: 'Survey deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllSurveys,
    getSurveyById,
    createSurvey,
    updateSurvey,
    deleteSurvey
};