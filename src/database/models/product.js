module.exports = function(sequelize, dataTypes){
    let alias = "Product";
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
        }, 
        description: {
            type: dataTypes.STRING(500),
        },
        price:{
            type: dataTypes.DECIMAL(8,2),
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL(8,2),
        },
      
        Categories_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "products", 
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.hasMany(models.Category, {
            as: "category",
            foreignKey: "categories_id"
        })
        Product.belongsTo(models.Image, {
            as: "image",
            foreignKey: "products_id"
        })
    }

    return Product
}