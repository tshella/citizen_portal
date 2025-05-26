export interface CreateServiceDto {
    categoryId: string;
    name: string;
    description: string;
    fee: number;
    processingTimeDays: number;
    requiredDocuments: string[];
  }