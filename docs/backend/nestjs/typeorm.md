---
title: TypeORM
---

## 介绍

[TypeORM](https://typeorm.io/) 是一个 [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) 框架。

可简单理解为：

```
数据库的表（table） --> 类（class）
记录（record，行数据）--> 对象实例（object）
字段（field）--> 对象的属性（attribute）
```

以下有一些特性（好处）的说明，但糟糕的是学习 ORM 的成本并不低，于是有了这篇抄写（相对原文筛减）。



## 分步指南

### 1. 创建一个模型

使用数据库从创建表开始。如何告诉 TypeORM 创建数据库表？答案是 - 通过模型。应用程序中的模型即数据库的表。

举个例子，存在 `Photo` 模型：

```ts
export class Photo {
  id: number
  name: string
  description: string
  filename: string
  views: number
}
```

并且希望将 photos 存储在数据库中。要在数据库中存储内容，首先需要一个数据库表，并从模型中创建数据库表。但是并非所有模型，只有定义为 entities 的模型才会被使用。

### 2. 创建一个实体

实体是由 `@Entity` 装饰器装饰的模型。将为此模型创建数据库表。

将 `Photo` 模型转为一个实体，此处采用 Active Record 模式：

```ts
import { Entity, BaseEntity } from 'typeorm'

@Entity()
export class Photo extends BaseEntity {
  id: number
  name: string
  description: string
  filename: string
  views: number
}
```

现在，将为 `Photo` 实体创建一个数据库表，但没有指明哪个字段属于哪一列。

### 3. 添加表列

要添加数据列，只需要将要生成的实体属性加上 `@Column` 装饰器：

```ts
import { Entity, BaseEntity, Column } from 'typeorm'

@Entity()
export class Photo extends BaseEntity {
	@Column()
  id: number
  
  @Column()
  name: string
  
  @Column()
  description: string
  
  @Column()
  filename: string
  
  @Column()
  views: number
  
  @Column()
  isPublished: boolean
}
```

现在，`id`、`name`、`description`、`filename`、`views` 和 `isPublished` 列将会被添加到 `Photo` 表中。数据库中的列类型会根据属性类型推断，例如：`number` 将会被转为 `integer`，`string` 将被转为 `varchar`，`boolean` 将被转为 `bool` 等，当然也可以手动指定类型。

我们已经生成了一个包含列的数据库表，但是别忘了，每个数据库表必须包含主键的列。

### 4. 创建主列

每个表必须至少有一个主键，这是必须的，无法避免。要使列成为主键，可使用 `@PrimaryColumn` 装饰器：

```ts
import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class Photo extends BaseEntity {
	@PrimaryColumn()
  id: number
  
  @Column()
  name: string
  
  @Column()
  description: string
  
  @Column()
  filename: string
  
  @Column()
  views: number
  
  @Column()
  isPublished: boolean
}
```

### 5. 创建自动生成的列

假设你希望 `id` 列自动生成，为此你需要将 `@PrimaryColumn` 替换为 `@PrimaryGeneratedColumn` 装饰器：

```ts
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Photo extends BaseEntity {
	@PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string
  
  @Column()
  description: string
  
  @Column()
  filename: string
  
  @Column()
  views: number
  
  @Column()
  isPublished: boolean
}
```

### 6. 列数据类型

在添加表列中介绍了默认映射类型，但实际上并非想要的类型：

```ts
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Photo extends BaseEntity {
	@PrimaryGeneratedColumn()
  id: number
  
  @Column({
    length: 100
  })
  name: string
  
  @Column("text")
  description: string
  
  @Column()
  filename: string
  
  @Column("double")
  views: number
  
  @Column()
  isPublished: boolean
}
```

### 7. 数据库增删改查

在 Active Record 模式下使用：

```ts
const photo = new Photo()
photo.name = "photo name"
photo.description = "photo description"
photo.filename = "photo filename"
photo.isPublished = true

// 保存/更新
await photo.save()
// 删除
await photo.remove()
// 查询
await Photo.find({ skip: 2, take: 5 })
await Photo.find({ isPublished: true })
await Photo.findOne({ name: "photo name" })
```

当使用 `save` 保存实体时，它总是先尝试使用给定的实体 ID 在数据库中查找实体，如果找到则更新数据库中的这一行，如果没有则插入一个新行。

### 8. 创建一对一的关系

要与另一个类创建一对一的关系，需要在当前类包含另一个类的信息：

```ts
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Photo } from './Photo'

@Entity()
export class PhotoMetadata extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column('int')
  height: number
  
  @Column('int')
  width: number
  
  @Column()
  orientation: string
  
  @Column()
  compressed: boolean
  
  @Column()
  comment: string
  
  @OneToOne(type => Photo)
  @JoinColumn()
  photo: Photo
}
```

这里使用了一个名为 `@OneToOne` 的装饰器，它允许在两个实体之间创建一对一的关系。`type => Photo` 是一个函数，返回想要与之建立关系的实体的类。由于特定语言的关系，只能使用一个返回类的函数，而不是直接使用该类。同时也可以把它写成 `() => Photo`，但是 `type => Photo` 显得代码更有可读性。`type` 变量本身不包含任何内容。

还有 `@JoinColumn` 装饰器，表明实体键的对应关系。关系可以时单向的或双向的。但是只有一方可以拥有，在关系的所有者方中需要使用 `@JoinColumn` 装饰器。

### 9. 保存一对一的关系

```ts
const photo = new Photo()
photo.name = "photo name"
photo.description = "photo description"
photo.filename = "photo filename"
photo.isPublished = true

const metadata = new PhotoMetadata()
metadata.height = 640;
metadata.width = 480;
metadata.compressed = true;
metadata.comment = "metadata comment";
metadata.orientation = "portait";
metadata.photo = photo; // 联接两者

// 先保存 photo
await photo.save()
// 再保存 photo 的 metadata
await metadata.save()
```

### 10. 反向关系

关系可以是单向的或双向的。目前 PhotoMetadata 和 Photo 之间的关系是单向的。关系的所有者时 PhotoMetadata，而 Photo 对 PhotoMetadata 一无所知。这使得从 Photo 中访问 PhotoMetadata 变得很复杂。要解决这个问题，我们应该在它们之间建立双向关系。

```ts
// PhotoMetadata.ts
@Entity()
export class PhotoMetadata extends BaseEntity {
  /* 省略其他列 */
  
  @OneToOne(type => Photo, photo => photo.metadata)
  @JoinColumn()
  photo: Photo
}
```

```ts
// Photo.ts
@Entity()
export class Photo extends BaseEntity {
  /* 省略其他列 */
  
  @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo)
  metadata: PhotoMetadata
}
```

注意，我们应该仅在关系的一侧使用 `@JoinColumn` 装饰器，关系的拥有方包含数据库中具有外键的列。

### 11. 取出关系对象的数据

在完成 **反向关系** 后才可以使用该方法：

```ts
await Photo.find({ relations: ['metadata'] })
await Photo.findOne(id, { relations: ['metadata'] })
```

使用 find 选项很简单，但是如果需要更复杂的查询，则应该使用 `QueryBuilder`：

```ts
await Photo.createQueryBuilder('photo')
  .innerJoinAndSelect('photo.metadata', 'metadata')
  .getMany()
```

### 12. 使用 cascades 自动保存相关对象

可以在关系中设置 `cascades` 选项，这时就可以保存其他对象的同时保存相关对象。不知这样是否会形成事务？

```ts
@Entity()
export class Photo extends BaseEntity {
  /* 省略其他列 */

  @OneToOne((type) => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {
    cascade: true,
  })
  metadata: PhotoMetadata;
}
```

在使用时：

```ts
const photo = new Photo()
photo.name = "photo name"
photo.description = "photo description"
photo.filename = "photo filename"
photo.isPublished = true

const metadata = new PhotoMetadata()
metadata.height = 640;
metadata.width = 480;
metadata.compressed = true;
metadata.comment = "metadata comment";
metadata.orientation = "portait";
metadata.photo = photo;

photo.metadata = metadata;

// 先保存 photo
await photo.save()
```

### 13. 创建多对一/一对多关系

假设一个 photo 有一个 author，每个 author 都可以有多个 photos。创建一个 `Author` 实体：

```ts
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Photo, (photo) => photo.author)
  photos: Photo[];
}
```

`Author` 包含反向关系。`@OneToMany` 总是反向的，并且总是与 `@ManyToOne` 一起出现。

```ts
@Entity()
export class Photo extends BaseEntity {
  /* 省略其他列 */

  @ManyToOne(() => Author, (author) => author.photos)
  author: Author;
}
```

### 14. 创建多对多关系

假设一个 photo 可以放在多个 album 中，每个 album 可以存放多个 photo。创建一个 `Album` 实体：

```ts
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class Album extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Photo, (photo) => photo.album)
  @JoinTable()
  photos: Photo[];
}
```

`@JoinTable` 需要指定这是关系的所有者方。

接着添加反向关系到 `Photo` 中：

```ts
@Entity()
export class Photo extends BaseEntity {
  /* 省略其他列 */

  @ManyToMany(() => Album, (album) => album.photos)
  album: Album[];
}
```

接着，数据库中会出现 `album_photos_photo` 联结表。

保存数据：

```ts
const album1 = new Album();
album1.name = 'Bears';
await album1.save();

const album2 = new Album();
album2.name = 'Me';
await album2.save();

const photo = new Photo();
photo.name = 'photo name3';
photo.description = 'photo description3';
photo.filename = 'photo filename3';
photo.views = 0;
photo.isPublished = true;
photo.album = [album1, album2];
await photo.save();
```

查询：

```ts
await Photo.findOne(id, { relations: ['album'] })
```



## 实体

基本实体由列和关系组成。每个实体必须有一个主列，否则该实体不会在数据库中生成对应的表。

### 实体列类型

可以将列类型指定为 `@Column` 的第一个参数，或者在 `@Column` 的列选项中指定：

```ts
@Column('int')
// or
@Column({ type: 'int' })

// 如果还有其他参数
@Column('varchar', { length: 200 })
// or
@Column({ type: 'varchar', length: 200 })
```

还有一些常用的类型：

+ `enum` 类型：

  ```ts
  export enum UserRole {
    ADMIN = 'admin',
    EDITOR = 'editor',
    GHOST = 'ghost'
  }
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
      type: 'enum',
      enum: UserRole,
      default: UserRole.GHOST
    })
    role: Role
  }
  ```

  ```ts
  export enum UserRoleType = 'admin' | 'editor' | 'ghost'
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
      type: 'enum',
      enum: ['admin', 'editor', 'ghost'],
      default: 'ghost'
    })
    role: Role
  }
  ```

+ `simple-array` 类型：

  注意不能在值里面有任何逗号。

  ```ts
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column('simple-array')
    hobbies: string[]
  }
  ```

  ```ts
  const user = new User()
  user.hobbies = ['play', 'sleep']
  ```

+ `simple-json` 类型：

  ```ts
  interface UserProfile {
    name: string
    nickname: string
  }
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column('simple-json')
    profile: UserProfile
  }
  ```

  ```ts
  const user = new User()
  user.profile = { name: 'John', nickname: 'Malkovich' }
  ```

### 实体列选项

该选项参考 `ColumnOptions` 接口：

+ `type: ColumnType`：列类型
+ `name: string`：数据库表中的列名
+ `length: number`：列类型的长度，例如创建 `varchar(150)`
+ `width:number`：列类型的显示范围
+ `onUpdate: string`：`ON UPDATE` 触发器
+ `nullable: boolean`：在数据库中使列 `NULL` 或 `NOT NULL`，默认 false
+ `select: boolean`：定义在查询时是否默认此列
+ `default: string`：添加数据库列的 `DEFAULT` 值
+ `primary: boolean`：将列标记为主要列
+ `unique: boolean`：将列标记为唯一列
+ `comment: string`：数据库列备注
+ `precision: number`：十进制列的精度，这是为值存储的最大位数
+ `scale: number`：十进制列的比例，表示小数点右侧的位数
+ `zerofill: boolean`：将 `ZEROFILL` 属性设置为数字列
+ `unsigned: boolean`：将 `UNSIGNED` 属性设置为数字列
+ `charset: string`：定义列字符集
+ `collation: string`：定义列排序规则
+ `enum: string[] | AnyEnum`：在 `enum` 列类型中使用，以指定允许的枚举值列表
+ `asExpression: string`：生成的列表达式
+ `generatedType: 'VIRTUAL' | 'STORED'`：生成的列类型

### 嵌入式实体

相对于继承而言，组合可能是更好的选择，不过这会影响数据库的列名。

组合会减少代码，但并不会影响数据库，因为未提供生成数据库表所必需的 `@Entity` 装饰器和 **主键**。

```ts
export class Name {
  @Column()
  first: string
  
  @Column()
  last: string
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string
  
  @Column(() => Name)
  name: Name
  
  @Column()
  isActive: boolean
}

@Entity()
export class Employee extends BaseEnity {
  @PrimaryGeneratedColumn()
  id: string
  
  @Column(() => Name)
  name: Name
  
  @Column()
  isActive: number
}
```

### 树实体

树结构支持多种类型，除 邻接列表外都可通过 `@Tree` 装饰器简单区分：

+ `nested-set`：嵌套集。对读取非常有效，但对写入不利，且不能在嵌套集中有多个根
+ `materialized-path`：物化路径（“路径枚举”）。简单有效
+ `closure-table`：闭合表。在读取和写入方面都很有效

使用：

```ts
// entity
@Entity()
@Tree('closure-table')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;
}
```

存储数据：

```ts
const a1 = new Category();
a1.name = 'a1';
await a1.save();

const a11 = new Category();
a11.name = 'a11';
a11.parent = a1;
await a11.save();

const a12 = new Category();
a12.name = 'a12';
a12.parent = a1;
await a12.save();

const a111 = new Category();
a111.name = 'a111';
a111.parent = a11;
await a111.save();

const a112 = new Category();
a112.name = 'a112';
a112.parent = a11;
await a112.save();
```

查询数据：

```ts
// 返回所有
const trees = await getTreeRepository(Category).findTrees()

// 返回根
const roots = await getTreeRepository(Category).findRoots()

// 返回子 Tree
const a11 = await Category.findOne({ name: 'a11' })
const children = await getTreeRepository(Category).findDescendantsTree(a11)

// 返回父级
const a11 = await Category.findOne({ name: 'a11' })
const parent = await getTreeRepository(Category).findAncestorsTree(a11)
```

更多查询参考 [使用树实体](https://typeorm.io/#/tree-entities/%E4%BD%BF%E7%94%A8%E6%A0%91%E5%AE%9E%E4%BD%93)。



## 关系

关系可以帮助你轻松地与相关实体合作。

### JoinColumn & JoinTable

`@JoinColumn` 不仅定义了关系的哪一侧包含带有外键的连接列，还允许自定义连接列名和引用的列名。

当我们设置 `@JoinColumn` 时，它会自动在数据库中创建一个名为 `propertyName + referenceColumnName` 的列。

`@JoinTable` 用于 “多对多” 关系，联结表是由 TypeORM 自动创建的一个特殊的单独表。

### 多对一和一对多

可以在 `@ManyToOne` / `@OneToMany` 关系中省略 `@JoinColumn`，除非需要自定义关联列在数据库中的名称。

`@ManyToOne` 可以单独使用，但 `@OneToMany` 必须搭配 `@ManyToOne` 使用。

在设置 `@ManyToOne` 的地方，相关实体将会有 “关联 id” 和外键。