export const ping = (req, res) => {
    res.json({ status: 'ok' });
};

export const saveLocation = (req, res) => {
    const data = req.body;
    res.json({ success: true, data });
};
