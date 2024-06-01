module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
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
    },
    { tableName: 'roles' }
  );

  return Role;
};
