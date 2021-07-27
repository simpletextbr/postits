import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePostIt1627089030759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "PostIt",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: "varchar",
                    },
                    {
                        name:"description",
                        type:"text"
                    },
                    {
                       name: "created_at",
                       type: "timestamp",
                       default: "now()" 
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()" 
                     }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('PostIt')
    }

}
