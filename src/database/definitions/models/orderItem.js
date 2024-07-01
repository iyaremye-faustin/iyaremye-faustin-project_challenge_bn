module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    'OrderItem',
    {
			item_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
			order_id: {
				type: DataTypes.BIGINT,
				allowNull: false,
			},
			product_id: {
				type: DataTypes.BIGINT,
				allowNull: true,
			},
			price:{
				type: DataTypes.INTEGER,
        allowNull: false,
			},
			quantity:{
				type: DataTypes.INTEGER,
        allowNull: false,
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
    { tableName: 'orders_items' }
  );
	OrderItem.associate = (models) => {
		OrderItem.belongsTo(models.Product, { foreignKey: 'product_id' ,as: 'product'});
		OrderItem.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
	}
  return OrderItem;
};
