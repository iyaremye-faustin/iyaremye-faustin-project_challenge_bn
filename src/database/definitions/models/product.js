module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      product_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
			price: {
				type: DataTypes.BIGINT,
				allowNull: false,
			},
			category_id: {
				type: DataTypes.BIGINT,
				allowNull: false,
			},
			fertilizer_id: {
				type: DataTypes.BIGINT,
				allowNull: true,
			},
			quantity_per_acre: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
			createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { tableName: 'products' },
  );
	Product.associate = (models) => {
		Product.belongsTo(models.Category, { foreignKey: 'category_id' ,as: 'category'});
	}
  return Product;
};
