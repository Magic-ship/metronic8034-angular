import {AfterViewChecked, ChangeDetectorRef, Component, HostBinding, Inject, Input, OnInit, PLATFORM_ID,} from '@angular/core';

import 'prismjs';
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-scss.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

import {isPlatformBrowser} from "@angular/common";

declare var Prism: any;

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent implements OnInit, AfterViewChecked {
  @Input() code: string;
  @Input() language: string;
  @HostBinding('class') class = 'py-5';
  copyText: 'copy' | 'copied' = 'copy';

  private highlighted: Boolean;

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void {
  }

  copy() {
    const create_copy = (e: ClipboardEvent) => {
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', this.code);
        e.preventDefault();
        document.removeEventListener('copy', create_copy);
      }
    };

    document.addEventListener('copy', create_copy);
    document.execCommand('copy');
    this.copyText = 'copied';
    setTimeout(() => {
      this.copyText = 'copy';
      this.cdr.detectChanges();
    }, 1500);
  }
}
