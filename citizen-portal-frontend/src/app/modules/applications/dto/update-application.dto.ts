export interface UpdateApplicationDto {
    applicationData?: Record<string, any>;
    status?: 'DRAFT' | 'SUBMITTED';
    documents?: File[];
  }