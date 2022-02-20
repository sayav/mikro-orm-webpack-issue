import { Entity, MikroORM, PrimaryKey } from '@mikro-orm/core';

@Entity()
class ExampleEntity {
  @PrimaryKey()
  id: string;
}

(async () => {
  await MikroORM.init({
    type: 'mysql',
    entities: [ExampleEntity],
    dbName: 'example_db',
    discovery: {
      disableDynamicFileAccess: true,
    },
  });
})();
