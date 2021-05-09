const postchema = require('../Model/postmessages');
module.exports = {
    getpost: async (req, res) => {
        try {
            const postdata = await postchema.find();
            console.log(typeof postdata);
            console.log(postdata);
            res.status(200).json(postdata);

        } catch (error) {
            res.status(500).json({ err: 1, err: error })
        }
    },
    creatpost: async (req, res) => {
        try {
            const newpost = req.body;
            const createnewpost = await postchema.create(newpost);
            const postdata = await postchema.find();
            res.status(200).json(postdata);

        } catch (error) {
            res.status(500).json({ err: 1, err: error })
        }
    }

}