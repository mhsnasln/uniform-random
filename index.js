module.exports = (x1, x2, type) => {
    const response = Math.random() * (x2 - x1) + x1;
    return type === 'absolute' ? Math.round(response) : response;
}