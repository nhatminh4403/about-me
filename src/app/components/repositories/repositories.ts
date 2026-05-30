import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-repositories',
  imports: [],
  templateUrl: './repositories.html',
  styleUrl: './repositories.css',
})
export class Repositories {
  protected readonly repos = signal<Repo[]>([
    {
      name: 'MealPlanner',
      description:
        'Fullstack meal-planning platform built around an ABP Framework backend and a Next.js frontend, with dedicated API and admin experiences.',
      language: 'Fullstack',
      langColor: '#8b5cf6',
      link: 'https://github.com/nhatminh4403/MealPlanner',
      tags: ['ABP Framework', 'Next.js', 'ASP.NET Core API'],
      links: [
        {
          label: 'Frontend',
          url: 'https://github.com/nhatminh4403/MealPlanner.FE',
        },
        {
          label: 'Backend',
          url: 'https://github.com/nhatminh4403/MealPlannerAPI.BE',
        },
      ],
    },
    {
      name: 'MealPlannerAPI.BE',
      description:
        'Layered ABP-based backend for the Meal Planner system, covering domain logic, APIs, migrations, and test projects.',
      language: 'Backend',
      langColor: '#0f9bd7',
      link: 'https://github.com/nhatminh4403/MealPlannerAPI.BE',
      tags: ['ABP Framework', '.NET', 'ASP.NET Core API'],
      links: [
        {
          label: 'Solution',
          url: 'https://github.com/nhatminh4403/MealPlannerAPI.BE',
        },
      ],
    },
    {
      name: 'MealPlanner.FE',
      description:
        'Next.js frontend for the Meal Planner experience, using the App Router and optimized font loading for the user-facing app.',
      language: 'Frontend',
      langColor: '#22c55e',
      link: 'https://github.com/nhatminh4403/MealPlanner.FE',
      tags: ['Next.js', 'TailwindCSS v4', 'TypeScript'],
      links: [
        {
          label: 'Frontend',
          url: 'https://github.com/nhatminh4403/MealPlanner.FE',
        },
      ],
    },
    {
      name: 'Acme.ProductSelling',
      description:
        'ABP and .NET 10 e-commerce platform with product, cart, order, payment, inventory, and Gemini-powered assistant features.',
      language: '.NET 10',
      langColor: '#14b8a6',
      link: 'https://github.com/nhatminh4403/Acme.ProductSelling',
      tags: ['E-commerce', 'Payment', 'AI Assistant','Razor Pages'],
      links: [
        {
          label: 'Source',
          url: 'https://github.com/nhatminh4403/Acme.ProductSelling',
        },
      ],
    },
    {
      name: 'Hackathon2025-FE',
      description:
        'Frontend for a Solana-based digital asset management system with wallet auth, gold-price analysis, and AI-assisted workflows.',
      language: 'Frontend',
      langColor: '#f97316',
      link: 'https://github.com/CyberNinjutsu/Hackathon2025-FE',
      tags: ['Solana', 'Next.js', 'AI'],
      teamSize: 5,
      links: [
        {
          label: 'Source',
          url: 'https://github.com/CyberNinjutsu/Hackathon2025-FE',
        },
      ],
    },
  ]);
}

interface Repo {
  name: string;
  description: string;
  language: string;
  langColor: string;
  link: string;
  tags: string[];
  links: RepoLink[];
  teamSize?: number;
}

interface RepoLink {
  label: string;
  url: string;
}
