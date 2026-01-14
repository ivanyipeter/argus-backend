export const ping = (req, res) => {
    res.json({status: 'ok'});
};

export const saveLocation = (req, res) => {
    const data = req.body;
    if (data !== null) {
        res.json({success: true, data});
    } else {
        res.json({success: false});
    }
};

