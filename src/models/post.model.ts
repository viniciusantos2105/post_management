import {DataTypes} from 'sequelize';
import {
    Model,
    Table,
    Column, Unique, AutoIncrement, AllowNull, PrimaryKey,
} from 'sequelize-typescript';

@Table({
    tableName: 'post',
    name: {
        singular: 'Post',
    },
})
export default class Post extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataTypes.BIGINT)
    id!: number;

    @AllowNull(false)
    @Column(DataTypes.STRING(100))
    title!: string;

    @AllowNull(false)
    @Column(DataTypes.TEXT)
    content!: string;

    @Column(DataTypes.DATE)
    createdAt!: Date;

    @Column(DataTypes.DATE)
    updatedAt!: Date;
}

