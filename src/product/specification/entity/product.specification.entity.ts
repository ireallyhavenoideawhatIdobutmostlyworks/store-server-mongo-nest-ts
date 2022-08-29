import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class ProductSpecificationEntity {
    
    public constructor(productBrand: string, productType: string, productWarranty: Number, prudctAdventages: string[], prudctFeatures: string[]) {
        this.productBrand = productBrand;
        this.productType = productType;
        this.productWarranty = productWarranty;
        this.prudctAdventages = prudctAdventages;
        this.prudctFeatures = prudctFeatures;
    }


    @ObjectIdColumn()
    public readonly _id: ObjectID;

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly productBrand: string

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly productType: string 
    
    @IsNotEmpty()
    @IsNumber()
    @Column()
    public readonly productWarranty: Number 

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly prudctAdventages: string[]

    @IsNotEmpty()
    @IsString()
    @Column()
    public readonly prudctFeatures: string[]
}