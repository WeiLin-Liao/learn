### sql语句


```mysql
# 登录数据库
mysql -uroot -proot

# 显示所有表
show databases;

# 创建数据库
create database test;

# 选择表
use test;

# 显示数据表
show tables;

# 创建数据表信息
create table person(
    name VARCHAR(20),
    age VARCHAR(20),
    sex CHAR(1),
    update_time DATE
);

# 查看数据表
describe person

# 查询
select * from admin;


# 条件查询
select * from admin where id=1;

# 插入数据
insert into person VALUES ('liao', '20', '男', '2020-05-01');

# 删除数据
delete from person where name='liao';

# 更新数据
update person set name='憨憨';

```

## 约束

- 主键约束

> 修改字段时值不能重复或者为空

```mysql

create table user(
    id int primary key,
    name varchar(20)
);

# 联合主键
create table admin(
    id int,
    name varchar(20),
    password varchar(20),
    primary key(id, name)
);
```

- 自增约束

> 每次插入数据值都会自动增长

```mysql
create table user(
    id int primary key auto_increment,
    name varchar(20),
    password varchar(20)
);
```

- 唯一约束

> 被约束的字段值不能重复

```mysql
create table user(
    id int,
    name varchar(20) unique
);
```

- 非空约束

> 修饰字段不能为空 null

```sql
create table user(
    id int,
    name varchar(20) not null
);
```

- 默认约束

> 插入时不带参数是的默认值

```sql
create table uesr(
    id int,
    name varchar(20) default '憨憨'
);
```

- 外键约束

> 主父表关联<br/>
主表中的记录被引用时不可被删除

```sql
# 教师
create table classes(
    id int primary key,
    name varchar(20)
)

# 学生
create table students(
    id int primary key,
    name varchar(20),
    class_id int,
    foreign key(class_id) references classes(id)
)

```

---

- 给某个值段设置主键约束

```mysql
alter table user add primary key (id);
```

- 给某个字段删除主键约束

```mysql

alter table user drop primary key;
# 删除字段name的唯一约束
alter table user drop index name;

```

- 增加约束

```mysql
alter table uesr modify id int primary key;
```

## 查询

1. 查询表所有数据
```sql
select * from person;
```

2. 查询指定字段

```sql
select name,sex from person;
```

3. 查询所有不重复的name列

```sql
select distinct name from person;
```

4. 查询多少到多少之间

```sql
select * from person where age between 20 and  30;
select * from person where age > 20 and age < 30;

```
5. 查询多个指定值

```sql
select * from person where age in(18, 20);

```
