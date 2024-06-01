module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Order',
    {
      order_id: {
        type: DataTypes.BIGINT(20),
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
			is_paid:{
				type: DataTypes.TINYINT(1),
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

  return Role;
};
