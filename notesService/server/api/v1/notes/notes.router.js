const router = require('express').Router();
const multer  = require('multer');
const notesController = require('./notes.controller');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', notesController.getNotes);
router.put('/:noteId', notesController.updateNote);
router.post('/', notesController.createNote);
router.get('/stream', notesController.getNotesAsStream);
router.post('/stream', upload.single('notes'), notesController.uploadNotes);
router.post('/share', notesController.shareNotes);

module.exports = router;
