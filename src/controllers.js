import supabase from './db.js';

export const ping = (req, res) => {
    res.json({status: 'ok'});
};

export const saveUserLocation = (req, res) => {
    const data = req.body;
    if (data !== null) {
        res.json({success: true, data});
    } else {
        res.json({success: false});
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const {data, error} = await supabase.from('users').select('*');
        if (error) {
            console.error('database error:', error);
            return res.status(500).json({status: 'error', message: error.message});
        }
        res.json({status: 'ok', users: data});
    } catch (error) {
        console.error('server error:', error);
        res.status(500).json({status: 'error', message: error.message});
    }
};

