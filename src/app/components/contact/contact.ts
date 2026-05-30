import { ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  toastVisible = false;
  toastMessage = 'Đã copy email';
  private toastTimer?: number;

  constructor(
    private readonly ngZone: NgZone,
    private readonly cdr: ChangeDetectorRef, // add this
  ) {}
  activelyUsedFbProfile: ContactInfo = {
    name: 'Phạm Trần Nh.Minh',
    url: 'https://www.facebook.com/hnim.hn.rt.hp',
  };
  notOftenUsedFbProfile: ContactInfo = {
    name: 'Phạm Trần Nhật Minh',
    url: 'https://www.facebook.com/BroDatIzNotCool/',
  };
  github: ContactInfo = {
    name: 'nhatminh4403',
    url: 'https://github.com/nhatminh4403',
  };
  linkedin: ContactInfo = {
    name: 'Nhat Minh Pham Tran',
    url: 'https://www.linkedin.com/in/pham-tran-nhat-minh',
  };
  email: ContactInfo = {
    name: 'Phạm Trần Nhật Minh',
    url: 'nhatminh4403@gmail.com',
  };
  ig: ContactInfo = {
    name: 'Pham Tran Nhat Minh',
    url: 'https://www.instagram.com/ptnhminh.__/',
  };
  twitter: ContactInfo = {
    name:"Ph.Tr.Nh.Minh",
    url:"https://x.com/pt_nhminh03"
  };
  async copyEmailUrl(event: MouseEvent): Promise<void> {
    event.preventDefault();

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(this.email.url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = this.email.url;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      this.ngZone.run(() => this.showToast('Đã copy email URL'));
    } catch {
      this.ngZone.run(() => this.showToast('Không thể copy URL'));
    }
  }

  private showToast(message: string): void {
    this.toastMessage = message;
    this.toastVisible = true;
    this.cdr.markForCheck();
    if (this.toastTimer) {
      window.clearTimeout(this.toastTimer);
    }

    this.toastTimer = window.setTimeout(() => {
      this.toastVisible = false;
      this.cdr.markForCheck();
    }, 1600);
  }
}

interface ContactInfo {
  name: string;
  url: string;
}
