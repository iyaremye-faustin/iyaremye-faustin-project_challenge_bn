module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      user_id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
			id_passport_number: {
        type: DataTypes.STRING,
        allowNull: true,
				unique:true,
      },
      active: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 1,
      },
      status: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 1,
      },
      role_id: {
				type: DataTypes.BIGINT,
				default: 3,
			},
      is_email: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment:
          'this field show if the user email is verified or not :1 = verified, 0 = not verified',
      },
      salt: {
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
    await queryInterface.dropTable('users');
  },
};
