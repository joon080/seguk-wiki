import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wiki-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="wiki-container">
      <aside class="sidebar">
        <h2>문서 목록</h2>
        <ul>
          <li *ngFor="let doc of docs" (click)="selectDoc(doc)">
            {{ doc }}
          </li>
        </ul>
      </aside>
      <main class="content">
        <h1>{{ selectedDoc }}</h1>
        <div class="markdown" [innerHTML]="content"></div>
        <div *ngIf="error" style="color:red; margin-top:10px;">{{ error }}</div>
        <section class="comments">
          <h3>댓글</h3>
          <form (submit)="addComment(); $event.preventDefault();">
            <input [(ngModel)]="newComment" placeholder="댓글을 입력하세요" />
            <button type="submit">작성</button>
          </form>
          <ul>
            <li *ngFor="let comment of comments[selectedDoc]">
              {{ comment }}
            </li>
          </ul>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .wiki-container { display: flex; font-family: Arial, sans-serif; }
    .sidebar { width: 200px; background: #f7f7f7; padding: 20px; border-right: 1px solid #ddd; }
    .sidebar ul { list-style: none; padding: 0; }
    .sidebar li { padding: 6px; cursor: pointer; }
    .sidebar li:hover { background: #e9e9e9; }
    .content { flex: 1; padding: 20px; }
    .markdown { background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #eee; }
    .comments { margin-top: 40px; }
    .comments input { width: 70%; }
    .comments button { margin-left: 10px; }
  `]
})
export class WikiPageComponent {
  docs = ['자율동아리', '정치 체계', '교과(과목)', '2025년 2-4', '식생'];
  selectedDoc = this.docs[0];
  content = '';
  error = '';
  newComment = '';
  comments: { [doc: string]: string[] } = {};

  constructor() {
    this.docs.forEach(doc => this.comments[doc] = []);
    this.loadDoc(this.selectedDoc);
  }

  selectDoc(doc: string) {
    this.selectedDoc = doc;
    this.loadDoc(doc);
  }

  // 수정된 부분: SSR 환경에서는 fetch를 실행하지 않음!
  loadDoc(doc: string) {
    this.error = '';
    if (typeof window !== 'undefined') {
      fetch('/content/' + doc)
        .then(res => {
          if (!res.ok) throw new Error(`Cannot GET /content/${doc}`);
          return res.text();
        })
        .then(text => {
          // 간단한 마크다운 파싱 (여전히 정규식)
          this.content = text
            .replace(/^# (.*)$/gim, '<h1>$1</h1>')
            .replace(/^## (.*)$/gim, '<h2>$1</h2>')
            .replace(/^### (.*)$/gim, '<h3>$1</h3>')
            .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*?)\*/gim, '<i>$1</i>')
            .replace(/\n/g, '<br>');
        })
        .catch(err => {
          this.content = '';
          this.error = err.message;
        });
    } else {
      // SSR 환경에서는 fetch를 건너뜀
      this.content = '';
      this.error = '문서를 서버에서 불러올 수 없습니다.';
    }
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments[this.selectedDoc].push(this.newComment.trim());
      this.newComment = '';
    }
  }
}