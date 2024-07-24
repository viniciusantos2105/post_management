import { DataTypes} from 'sequelize';
import {
    Model,
    Table,
    Column, Unique, AutoIncrement, AllowNull, PrimaryKey, BelongsTo
} from 'sequelize-typescript';
import Post from "./post.model";

@Table({
    tableName: 'commentary',
    name: {
        singular: 'Commentary',
    },
})
export default class Commentary extends Model {
    @PrimaryKey
    @Unique
    @AutoIncrement
    @AllowNull(false)
    @Column(DataTypes.BIGINT)
    id: number;

    @AllowNull(false)
    @Column(DataTypes.TEXT)
    content: string;

    @Column(DataTypes.DATE)
    createdAt: Date;

    @Column(DataTypes.DATE)
    updatedAt: Date;

    @BelongsTo(() => Post ,{foreignKey: 'post_id', targetKey: 'id'})
    post!: Post;
}