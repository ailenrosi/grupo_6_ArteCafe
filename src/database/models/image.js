module.exports = function(sequelize, dataTypes){
    let alias = "Image";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        Products_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false

        }
    }
    let config = {
        tableName: "images", 
        timestamps: true
    }

    const image = sequelize.define(alias, cols, config)

    image.associate = models => {
      image.hasMany(models.Products_id, {
            as: "images",
            foreignKey: "products_id"
        })
    }

    return image
}