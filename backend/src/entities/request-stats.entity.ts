import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('request_stats')
export class RequestStats {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  route: string;

  @Column({ type: 'jsonb', nullable: true })
  query_params: Record<string, any>;

  @Column()
  response_time_ms: number;

  @CreateDateColumn()
  created_at: Date;
}