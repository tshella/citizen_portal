export interface GovernmentService {
    id: string;
    categoryId: string;
    name: string;
    description: string;
    fee: number;
    processingTimeDays: number;
    requiredDocuments: string[];
    active: boolean;
  }
  
  export interface ServiceCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
  }