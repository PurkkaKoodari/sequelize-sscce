import {DataTypes, Model, Op, Sequelize} from 'sequelize';

const sequelize: Sequelize = null as any;

interface PostAttributes {
  authorId: number;
}

class Post extends Model<PostAttributes> implements PostAttributes {
  public authorId!: number;
};

Post.init({
  authorId: DataTypes.INTEGER,
}, {
  sequelize,
});

// https://sequelize.org/master/manual/model-querying-basics.html#the-basics
Post.findAll({
  where: {
    authorId: {
      [Op.eq]: 2
    }
  }
});
