module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('categories', {
      categ_id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
				unique:true,
      },
      description: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('categories');
  },
};
