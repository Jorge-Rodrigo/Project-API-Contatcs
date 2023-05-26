import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 150 })
  fullName: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ type: "int" })
  phoneNumber: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @ManyToOne(() => User)
  user: User;
}

export default Contact;
