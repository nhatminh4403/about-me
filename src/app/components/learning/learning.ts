import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.html',
  styleUrl: './learning.css',
})
export class Learning {
  protected readonly skills = signal<Skill[]>([
    // What I've learnt
    {
      name: 'ASP.NET Core MVC / Web API',
      level: 85,
      category: 'learnt',
      iconColor: 'from-[#512bd4] to-[#7c3aed]',
    },
    {
      name: 'Angular 21',
      level: 30,
      category: 'learning',
      iconColor: 'from-[#dd0031] to-[#c3002f]',
    },
    {
      name: 'Entity Framework Core',
      level: 80,
      category: 'learnt',
      iconColor: 'from-[#512bd4] to-[#9333ea]',
    },
    {
      name: 'TypeScript & JavaScript',
      level: 45,
      category: 'learning',
      iconColor: 'from-[#3178c6] to-[#007acc]',
    },
    {
      name: 'SQL Server',
      level: 75,
      category: 'learnt',
      iconColor: 'from-[#8B0000] to-[#0072c6]',
    },
    {
      name: 'Tailwind CSS & Modern CSS',
      level: 50,
      category: 'learning',
      iconColor: 'from-[#38bdf8] to-[#0ea5e9]',
    },
    // What I'm learning
    {
      name: 'ABP Framework',
      level: 41,
      category: 'learning',
      iconColor: 'from-[#E83090] to-[#3A82F6]',
      additionalInfo:"I might drop this."
    },
    {
      name: 'Azure Cloud (App Services) ',
      level: 38,
      category: 'learning',
      iconColor: 'from-[#0078d4] to-[#0062b1]',
    },
  ]);
}
interface Skill {
  name: string;
  level: number;
  category: 'learnt' | 'learning';
  iconColor: string;
  additionalInfo?: string;
}
