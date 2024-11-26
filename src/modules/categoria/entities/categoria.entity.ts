import { Producto } from "../../producto/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    // Hacer "detalle" nullable para permitir valores nulos
    @Column({ type: 'text', nullable: true })  // Agregamos 'nullable: true' aquí
    detalle: string | null;

    @OneToMany(() => Producto, (prod) => prod.categoria)
    producto: Producto[];
}
