module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('roles', {
			role_id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      role_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
			description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('roles');
  },
};
