import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userRole'
})
export class UserRolePipe implements PipeTransform {
  transform(value: string): string {
    const roleMap: Record<string, string> = {
      'ROLE_CITIZEN': 'Citizen',
      'ROLE_ADMIN': 'Admin',
      'ROLE_MODERATOR': 'Moderator'
    };
    return roleMap[value] || value;
  }
}