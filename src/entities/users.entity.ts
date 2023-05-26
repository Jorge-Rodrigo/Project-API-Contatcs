import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Contact from "./contact.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 150 })
  fullName: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ type: "varchar", length: 15 })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date | null;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date | null;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string | Date | null | undefined;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @BeforeInsert()
  hashPass() {
    this.password = hashSync(this.password, 9);
  }
}

export default User;
