export interface CreateApplicationDto {
    serviceId: string;
    applicationData: Record<string, any>;
    documents?: File[];
  }