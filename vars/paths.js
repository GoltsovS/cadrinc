const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = {
    ROOT: rootDir,
    UPLOADS: path.join(rootDir, 'uploads'),
    DIST: {
        CLIENT: path.join(rootDir, 'dist', 'client'),
    },
    SRC: {
        CLIENT: path.join(rootDir, 'src', 'client'),
    },
};