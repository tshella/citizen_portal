export interface User {
    id: string;
    username: string;
    email: string;
    roles: string[];
    enabled: boolean;
    createdAt: Date;
    lastLogin?: Date;
  }
  
  export interface UserStats {
    totalUsers: number;
    activeToday: number;
    newThisWeek: number;
  }