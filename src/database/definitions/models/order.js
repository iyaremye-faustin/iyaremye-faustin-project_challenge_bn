module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      order_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
			farmer_id: {
				type: DataTypes.BIGINT,
				allowNull: false,
			},
			approved_id: {
				type: DataTypes.BIGINT,
				allowNull: true,
			},
			land_size_acre: {
				type: DataTypes.BIGINT,
				allowNull: false,
			},
			total_amount: {
				type: DataTypes.BIGINT,
				allowNull: false,
			},
			is_paid:{
				type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
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
    { tableName: 'orders' }
  );
	Order.associate = (models) => {
		Order.belongsTo(models.User, { foreignKey: 'farmer_id' ,as: 'user'});
		Order.belongsTo(models.User, { foreignKey: 'approved_id' ,as: 'approved'});
		Order.hasMany(models.OrderItem, { foreignKey: 'order_id' ,as: 'items'});
	}
  return Order;
};
