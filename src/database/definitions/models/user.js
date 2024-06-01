module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
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
				unique: true,
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
			id_passport_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
        defaultValue: 1,
      },
			role_id: {
				type: DataTypes.BIGINT,
				default: 3,
			},
			salt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { tableName: 'users' },
  );
	User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: 'role_id' ,as: 'role'});
  };
  return User;
};
