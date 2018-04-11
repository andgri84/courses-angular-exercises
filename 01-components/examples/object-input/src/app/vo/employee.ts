import { Job } from './job';
import { User } from './user';

export class Employee extends User {
  actualJob: Job;
  hasBeenFired: boolean;
  pastJobs: Array<Job>;
}
