import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm"
import { ProductSpecificationEntity } from "./product.specification.entity";

@Entity()
export class ProductEntity {

    public constructor(productName: string, basePrice: Number, finalPrice: Number, discountPrice: Number, description: string, productSpecification: ProductSpecificationEntity[]) {
        this.productName = productName;
        this.basePrice = basePrice;
        this.finalPrice = finalPrice;
        this.discountPrice = discountPrice;
        this.description = description;
        this.productSpecification = productSpecification;
    }


    @ObjectIdColumn()
    public readonly _id: ObjectID;

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly productName: string

    @IsNotEmpty()
    @IsNumber()
    @Column()
    public readonly basePrice: Number

    @IsNotEmpty()
    @IsNumber()
    @Column()
    public readonly finalPrice: Number

    @IsNotEmpty()
    @IsNumber()
    @Column()
    public readonly discountPrice: Number

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly description: string

    @IsNotEmpty()
    @Column((type) => ProductSpecificationEntity)
    public readonly productSpecification: ProductSpecificationEntity[]
}