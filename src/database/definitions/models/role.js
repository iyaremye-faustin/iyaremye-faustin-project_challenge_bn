module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      role_id: {
        type: DataTypes.BIGINT,
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
    },
    { tableName: 'roles' }
  );
	Role.associate = (models) => {
    Role.hasOne(models.User, { foreignKey: 'role_id' ,as: 'role'});
  };

  return Role;
};
