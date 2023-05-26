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

  @Column({ length: 45 })
  email: string;

  @Column({ type: "varchar", length: 15 })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @ManyToOne(() => User)
  user: User;
}

export default Contact;
