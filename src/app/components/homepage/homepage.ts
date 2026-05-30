import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Introduction } from '../introduction/introduction';
import { Learning } from '../learning/learning';
import { Repositories } from '../repositories/repositories';
import { Contact } from '../contact/contact';
import { GlowBg } from '../glow-bg/glow-bg';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, FormsModule,GlowBg,Introduction, Learning, Repositories, Contact],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  // Curated premium projects

  // Skill sets

  // Contact form state
  protected readonly contactForm = signal({
    name: '',
    email: '',
    message: '',
  });

  protected readonly formStatus = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  protected handleContactSubmit(event: Event): void {
    event.preventDefault();
    if (!this.contactForm().name || !this.contactForm().email || !this.contactForm().message) {
      this.formStatus.set('error');
      setTimeout(() => this.formStatus.set('idle'), 3000);
      return;
    }

    this.formStatus.set('submitting');

    // Simulate API request
    setTimeout(() => {
      this.formStatus.set('success');
      this.contactForm.set({ name: '', email: '', message: '' });
      setTimeout(() => this.formStatus.set('idle'), 5000);
    }, 1500);
  }
}
