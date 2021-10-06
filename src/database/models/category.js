module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }}

    let config = {
        tableName: "categories", 
    }

    const category = sequelize.define(alias, cols, config)

    category.associate = models => {
        category.belongsTo(models.product, {
            as: "product",
            foreignKey: "categories_id"
        })
        category.belongTo(models.subcategory, {
            as: "subctaegoy",
            foreignKey: "categories_id"
        })
    }

    return category
}