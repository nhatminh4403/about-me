import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Homepage } from '../homepage/homepage';
import { GlowBg } from '../glow-bg/glow-bg';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, Homepage],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
