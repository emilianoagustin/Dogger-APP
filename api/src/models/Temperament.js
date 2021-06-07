const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('temperament', {
    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
}