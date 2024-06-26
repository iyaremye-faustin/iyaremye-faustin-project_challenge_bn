module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('products', {
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
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('products');
  },
};
