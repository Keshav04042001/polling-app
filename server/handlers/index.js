
const notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;

    next(err);
}

const errors = (err, req, res, next) => {
    res.status(err.json || 500).json({
        error: err.message || 'Something went wrong'
    })
};

module.exports = {
    errors,
    notFound
};