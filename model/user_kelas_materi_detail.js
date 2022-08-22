module.exports = (sequelize, DataTypes) => {
    const user_kelas_materi_detail = sequelize.define('user_kelas_materi_detail', {
        id_user_kelas_materi_detail: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },    
        id_kelas_materi: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_kelas_materi_detail:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_user:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        histori:{
            type: DataTypes.CHAR,
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at:{
            type: DataTypes.DATE,
            allowNull: false
        },
    }, {
        tableName: 'user_kelas_materi_detail'
    })
    return user_kelas_materi_detail;
};