module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('orders_items', {
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
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('orders_items');
  },
};
