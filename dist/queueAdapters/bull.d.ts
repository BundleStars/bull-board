import { Job, Queue } from 'bull';
import { JobCleanStatus, JobCounts, JobStatus, QueueAdapterOptions } from '../@types/app';
import { BaseAdapter } from './base';
export declare class BullAdapter extends BaseAdapter {
    queue: Queue;
    constructor(queue: Queue, options?: Partial<QueueAdapterOptions>);
    getClient(): Promise<Queue['client']>;
    getName(): string;
    clean(jobStatus: JobCleanStatus, graceTimeMs: number): Promise<any>;
    getJob(id: string): Promise<Job | undefined | null>;
    getJobs(jobStatuses: JobStatus[], start?: number, end?: number): Promise<Job[]>;
    getJobCounts(..._jobStatuses: JobStatus[]): Promise<JobCounts>;
    getJobLogs(id: string): Promise<string[]>;
}
